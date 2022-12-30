import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="mt-5 max-w-[600px] p-2 xl:min-w-[300px]">
      <SidebarRow
        src={session?.user?.image as string}
        title={session?.user?.name as string}
      />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={ComputerDesktopIcon} title="watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="see More" />
    </div>
  );
};

export default Sidebar;
