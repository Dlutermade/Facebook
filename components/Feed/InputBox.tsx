import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { postsCol, storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef<HTMLInputElement>(null!);
  const filePickerRef = useRef<HTMLInputElement>(null!);
  const [imageToPost, setImageToPost] = useState<string | null>(null);

  const sendPost: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    addDoc(postsCol, {
      message: inputRef.current.value,
      name: session?.user?.name as string,
      email: session?.user?.email as string,
      image: session?.user?.image as string,
      timestamp: serverTimestamp(),
    }).then((docRef) => {
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${docRef.id}`);
        const uploadTask = uploadString(storageRef, imageToPost, "data_url");

        removeImage();

        uploadTask.then(() => {
          getDownloadURL(storageRef).then((url) => {
            updateDoc(docRef, {
              postImage: url,
            });
          });
        });
      }
    });

    inputRef.current.value = "";
  };

  const handleAddImageToPost: ChangeEventHandler<HTMLInputElement> = (e) => {
    const reader = new FileReader();

    if (e.target.files?.length && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target?.result as string);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="mt-6 rounded-2xl bg-white p-2 font-medium text-gray-500 shadow-md">
      <div className="flex items-center gap-4 p-4">
        <Image
          className="rounded-full"
          src={session?.user?.image as string}
          alt=""
          width={40}
          height={40}
        />
        <form className="flex flex-1">
          <input
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind. ${session?.user?.name}? `}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex w-10 transform cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
          >
            <Image
              className="h-10 object-contain"
              src={imageToPost}
              alt=""
              width={40}
              height={40}
            />
            <p className="text-center text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={handleAddImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
