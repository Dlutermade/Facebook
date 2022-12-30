import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Bill Mo",
    profile:
      "https://scontent.ftpe1-3.fna.fbcdn.net/v/t1.18169-9/22049792_1950837298464400_4438699902791204830_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=u8qHaANB0UQAX_m77QU&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfAntkSHZf9PssbMXv2ZW1SWTe03iREZARLrcoCPHpy1kw&oe=63D2F7CC",
    src: "https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/291679798_3155360968012021_8849533370809472633_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=JCXGD0wIDYMAX--zU94&tn=kBN--YWI5krDjp61&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfAve-VXScbohZrpJUmjLSDjFDd2cdm-5HZ1yUssGXFgbA&oe=63AFD123",
  },
  {
    name: "ACC",
    profile:
      "https://scontent.ftpe1-3.fna.fbcdn.net/v/t1.18169-9/22049792_1950837298464400_4438699902791204830_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=u8qHaANB0UQAX_m77QU&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfAntkSHZf9PssbMXv2ZW1SWTe03iREZARLrcoCPHpy1kw&oe=63D2F7CC",
    src: "https://scontent.ftpe1-3.fna.fbcdn.net/v/t1.6435-9/149913915_2792549770959811_673780259520685683_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=az_qdLXQRw0AX8Rlhw6&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfAm5PD4LI662KvSC8a1lLHqS3GC8pfRInF3JUO9ZnHDUw&oe=63D2F4FA",
  },
  {
    name: "mike",
    profile:
      "https://scontent.ftpe1-3.fna.fbcdn.net/v/t1.18169-9/22049792_1950837298464400_4438699902791204830_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=u8qHaANB0UQAX_m77QU&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfAntkSHZf9PssbMXv2ZW1SWTe03iREZARLrcoCPHpy1kw&oe=63D2F7CC",
    src: "https://scontent.ftpe1-3.fna.fbcdn.net/v/t39.30808-6/240103687_2926263077588479_6882982402809871040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7ZbgQxV7huYAX-jXfBI&tn=kBN--YWI5krDjp61&_nc_ht=scontent.ftpe1-3.fna&oh=00_AfA3TvTqa68mbGNRwC6pgXfooBHwNh0SnaSncST3COumUw&oe=63B07727",
  },
];

const Stories = () => {
  return (
    <div className="mx-auto flex justify-center gap-3">
      {stories.map(({ name, src, profile }, idx) => (
        <StoryCard name={name} src={src} profile={profile} key={idx} />
      ))}
    </div>
  );
};

export default Stories;
