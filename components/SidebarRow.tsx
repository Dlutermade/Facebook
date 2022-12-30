import Image from "next/image";

interface Props {
  title: string;
  Icon?: (
    props: React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
    }
  ) => JSX.Element;
  src?: string;
}

const SidebarRow = ({ title, Icon, src }: Props) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-xl p-4 hover:bg-gray-200">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          alt={""}
          width={30}
          height={30}
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden font-medium sm:inline">{title}</p>
    </div>
  );
};

export default SidebarRow;
