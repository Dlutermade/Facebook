import { Timestamp } from "firebase/firestore";

export interface Post {
  ld?: string;
  name: string;
  email: string;
  image: string;
  message: string;
  postImage?: string;
  timestamp?: Timestamp;
}
