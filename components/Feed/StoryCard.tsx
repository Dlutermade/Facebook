import Image from "next/image";

interface Props {
  name: string;
  src: string;
  profile: string;
}

const StoryCard = ({ name, src, profile }: Props) => {
  return (
    <div className="relative h-14 w-14 transform cursor-pointer p-3 transition duration-200 ease-in hover:scale-105 hover:animate-pulse md:h-20 md:w-20 lg:h-56 lg:w-32">
      <Image
        className="absolute top-10 z-50 rounded-full object-cover opacity-0 lg:opacity-100"
        src={profile}
        alt=""
        width="40"
        height="40"
      />
      <Image
        className="rounded-full object-cover brightness-75 filter lg:rounded-3xl"
        src={src}
        alt=""
        fill
      />
      <h1 className="absolute bottom-4 left-4 z-50 font-semibold text-white">
        {name}
      </h1>
    </div>
  );
};

export default StoryCard;
