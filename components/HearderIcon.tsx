import { SVGProps } from "react";

interface Props {
  Icon: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
  active: boolean;
}

const HearderIcon = ({ Icon, active }: Props) => {
  return (
    <div className="group flex cursor-pointer items-center rounded-xl active:border-b-2 active:border-blue-500 sm:h-14 md:px-10 md:hover:bg-gray-100">
      <Icon
        className={`h-5 text-gray-500 group-hover:text-blue-500 sm:h-7 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default HearderIcon;
