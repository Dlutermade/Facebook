import {
  ChatBubbleOvalLeftEllipsisIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  image: string;
  message: string;
  postImage?: string;
  timestamp?: Timestamp;
}

const Post = ({ name, image, message, postImage, timestamp }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-2xl bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={image}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {timestamp
                ? new Date(timestamp?.toDate()).toLocaleString()
                : "Loading"}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image className="object-cover" src={postImage} alt="" fill />
        </div>
      )}

      <div className="flex items-center justify-between rounded-b-2xl border-t bg-white text-gray-400 shadow-md">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatBubbleOvalLeftEllipsisIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
