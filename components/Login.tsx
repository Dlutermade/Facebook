import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://www.facebook.com/images/fb_icon_325x325.png"
        alt=""
        width={400}
        height={400}
        priority
        className="mb-16 w-64 object-contain"
        // layout="fixed"
      />
      <h1
        className="cursor-pointer rounded-full bg-blue-500 p-5 text-center text-white"
        onClick={() => signIn()}
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
