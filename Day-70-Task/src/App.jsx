import Card from "./components/Card";

function App() {
  const cardData = [
  {
    coverImage:
      "https://images.unsplash.com/photo-1503264116251-35a269479413",
    profileImage:
      "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Ritam",
    description: "Frontend Developer | React & Tailwind",
    likes: 1200,
    posts: 85,
    views: 9400,
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    profileImage:
      "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ananya",
    description: "UI/UX Designer & Creative Thinker",
    likes: 980,
    posts: 64,
    views: 7200,
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    profileImage:
      "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Arjun",
    description: "Full Stack Developer | MERN",
    likes: 1560,
    posts: 112,
    views: 13200,
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profileImage:
      "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Sneha",
    description: "Content Creator & Blogger",
    likes: 2100,
    posts: 190,
    views: 18900,
  }
];
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 gap-[1rem]">
      
      {cardData.map((obj)=>{
        return <Card
        coverImage={obj.coverImage}
         profileImage=
      {obj.profileImage}
    name= {obj.name}
    description= {obj.description}
    likes= {obj.likes}
    posts= {obj.posts}
    views= {obj.views}
        />
      })}
    </div>
  );
}

export default App;
