[實作Facebook教學影片](https://www.youtube.com/watch?v=dBotWYKYYWc])

使用套件
1. Tailwind
2. Tailwind-scrollbar-hide
   隱藏 scrollbar -> scrollbar-hide
3. heroicons
   可以用 Tailwind 寫法的 icon
4. next-auth
   驗證登入
5. firebase v9
   雲儲存
6. react-firebase-hooks
   hook 化操作

next-auth

```ts
// _app.tsx
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}> // 需要注入
      <Component {...pageProps} />
    </SessionProvider>
  );
}
```

```ts
// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID, // 串接 facebook api
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET, // 串接 facebook api
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
```

```ts
import { useSession } from "next-auth/react";

const { status } = useSession(); // 可以判斷是否已經驗證登入的狀態
if (status === "unauthenticated") return <Login />;

//----------

import { signOut, signIn } from "next-auth/react";

signIn() // 跳轉 到 登入頁面
signOut() // 登出

//----------

const { data: session } = useSession(); // 登入資訊
session?.user?.image // 大頭貼
session?.user?.name // 名稱
session?.user?.email // 信箱
```

firebase
```ts
import { initializeApp } from "firebase/app";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(); // 通常用於儲存圖片等等多媒體的空間

// 容器
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

const postsCol = createCollection<Post>("posts");

export { storage, db, postsCol };

//------------
import { Timestamp } from "firebase/firestore";

export interface Post {
  ld?: string;
  name: string;
  email: string;
  image: string;
  message: string;
  postImage?: string;
  timestamp?: Timestamp; // 時間
}

```

```ts
import { addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

//-------------
// 圖片轉文字
const reader = new FileReader();

if (e.target.files?.length && e.target.files[0]) {
  reader.readAsDataURL(e.target.files[0]);
}

reader.onload = (readerEvent) => {
  setImageToPost(readerEvent.target?.result as string);
};
//-------------

addDoc(postsCol, {
  message: inputRef.current.value,
  name: session?.user?.name as string,
  email: session?.user?.email as string,
  image: session?.user?.image as string,
  timestamp: serverTimestamp(),
}).then((docRef) => {
  if (imageToPost) {
    // 指定上傳到哪邊
    const storageRef = ref(storage, `posts/${docRef.id}`);
    // 上傳圖片文字 data_url 是 資料型態
    const uploadTask = uploadString(storageRef, imageToPost, "data_url"); 

    // 上傳完畢要做的事情
    uploadTask.then(() => {
      // 取得可以下載圖片的URL
      getDownloadURL(storageRef).then((url) => {
        // 更新firestore
        updateDoc(docRef, { 
          postImage: url,
        });
      });
    });
  }
});
```

```ts
import { getDocs, orderBy, query } from "firebase/firestore";

export const getServerSideProps: GetServerSideProps = async () => {
  // getDocs 是取得所有 getDoc 是取得單一
  // query(查詢哪一個容器, 查詢跳件1 ...)
  const posts = await getDocs(query(postsCol, orderBy("timestamp", "desc")));

  const docs = posts.docs.map((post) => ({
    id: post.id, // 取得該筆資料專屬id
    ...post.data(), // 取得所有資料
    timestamp: null,
  }));

  return {
    props: {
      posts: docs,
    },
  };
};

```

react-firebase-hooks

```ts
import { useCollection } from "react-firebase-hooks/firestore";
const [realtimePosts, loading, error] = useCollection(
  query(postsCol, orderBy("timestamp", "desc"))
);

// realtimePosts 同 posts.docs
```