// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { Post } from "@/types/Post";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR9JOtSSsQfCcv7ojoUl_9Qd_87TCJMMs",
  authDomain: "facebooknext-75d30.firebaseapp.com",
  projectId: "facebooknext-75d30",
  storageBucket: "facebooknext-75d30.appspot.com",
  messagingSenderId: "522488700286",
  appId: "1:522488700286:web:be96c7bde18928633fe72f",
  measurementId: "G-G2YVDV3EZ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

const postsCol = createCollection<Post>("posts");

export { storage, db, postsCol };
