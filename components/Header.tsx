import Image from "next/image";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import HearderIcon from "./HearderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-2 shadow-md lg:px-5">
      <div className="flex items-center">
        <Image
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          alt=""
          width={40}
          height={40}
        />
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            className="ml-2 hidden bg-transparent placeholder-gray-500 outline-none md:inline"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center gap-6 md:gap-2">
        <HearderIcon Icon={HomeIcon} active />
        <HearderIcon Icon={FlagIcon} active={false} />
        <HearderIcon Icon={PlayIcon} active={false} />
        <HearderIcon Icon={ShoppingCartIcon} active={false} />
        <HearderIcon Icon={UserGroupIcon} active={false} />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        <Image
          onClick={() => signOut()}
          className="cursor-pointer rounded-full"
          src={session?.user?.image as string}
          alt={""}
          width="40"
          height="40"
        />
        <p className="whitespace-nowrap pr-3 font-semibold">
          {session?.user?.name}
        </p>
        <Squares2X2Icon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
