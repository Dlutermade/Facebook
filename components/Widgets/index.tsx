import {
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "edge",
    src: "https://scontent.ftpe1-3.fna.fbcdn.net/v/t1.6435-9/91119618_2528672087347582_380485736798879744_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Tkql_cDBFncAX_r04K7&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfAgLQE9expiBax2Q0hdygVDZ-E8m8Z47ojF19YDjErntg&oe=63D52565",
  },
  {
    name: "rxjs",
    src: "https://scontent.ftpe1-3.fna.fbcdn.net/v/t1.6435-9/91074954_2528672050680919_6988071030799466496_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=yxC24RHb1bkAX-zcMFc&tn=kBN--YWI5krDjp61&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfD0RPEmyiwYF1oOKbANGYKJjCtE0TMzDPYeeaWmfJ8keA&oe=63D509C3",
  },
  {
    name: "水冷頭",
    src: "https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/240730721_2926262994255154_2213536472801225214_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=W9VNabiPMDsAX_ECzmG&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfA3X_gMjVQENAwKRELeGOMjR1iYkn5PRCLYS7l7Qynrig&oe=63B2122E",
  },
];

const Widgets = () => {
  return (
    <div className="mt-5 hidden w-60 flex-col p-2 lg:flex">
      <div className="mb-5 flex items-center justify-between text-gray-500">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex gap-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact, idx) => (
        <Contact src={contact.src} name={contact.name} key={idx} />
      ))}
    </div>
  );
};

export default Widgets;
