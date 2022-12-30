import { postsCol } from "@/lib/firebase";
import { Post as IPost } from "@/types/Post";
import { orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";

interface Props {
  posts: IPost[];
}

const Posts = ({ posts }: Props) => {
  const [realtimePosts, loading, error] = useCollection(
    query(postsCol, orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realtimePosts
        ? realtimePosts.docs.map((post) => (
            <Post
              name={post.data().name}
              image={post.data().image}
              message={post.data().message}
              postImage={post.data().postImage}
              timestamp={post.data().timestamp}
              key={post.id}
            />
          ))
        : posts.map((post) => (
            <Post
              name={post.name}
              image={post.image}
              message={post.message}
              postImage={post.postImage}
              timestamp={post.timestamp}
              key={post.ld}
            />
          ))}
    </div>
  );
};

export default Posts;
