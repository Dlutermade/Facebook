import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { postsCol } from "@/lib/firebase";
import { Post } from "@/types/Post";
import { getDocs, orderBy, query } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  const { status } = useSession();

  if (status === "unauthenticated") return <Login />;

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getDocs(query(postsCol, orderBy("timestamp", "desc")));

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      posts: docs,
    },
  };
};
