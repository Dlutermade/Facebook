import Image from "next/image";

interface Props {
  src: string;
  name: string;
}

const Contact = ({ src, name }: Props) => {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center gap-3 rounded-xl p-2 hover:bg-gray-200">
      <Image
        className="h-12 w-12 rounded-full object-cover"
        src={src}
        alt=""
        width={50}
        height={50}
      />
      <p>{name}</p>
      <div className="absolute bottom-1 left-9 h-3 w-3 animate-bounce rounded-full bg-green-400"></div>
    </div>
  );
};

export default Contact;
