import React from "react";
import Cards from "./components/Cards";

function App() {
  const cardData = [
    {
      id: 1,
      name: "Ritam",
      profession: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1503264116251-35a269479413",
      rating: "4.9",
      expert: "Expert",
      number: 10,
    },
    {
      id: 2,
      name: "Amit",
      profession: "UI Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: "4.8",
      expert: "Pro",
      number: 12,
    },
    {
      id: 3,
      name: "Sneha",
      profession: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      rating: "4.7",
      expert: "Expert",
      number: 8,
    },
    {
      id: 4,
      name: "Rahul",
      profession: "Full Stack Dev",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: "5.0",
      expert: "Elite",
      number: 15,
    },
    {
      id: 5,
      name: "Priya",
      profession: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      rating: "4.6",
      expert: "Pro",
      number: 9,
    },
    {
      id: 6,
      name: "Karan",
      profession: "Mobile App Dev",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      rating: "4.9",
      expert: "Expert",
      number: 11,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 p-8 overflow-y-auto">
      <Cards data={cardData} />
    </div>
  );
}

export default App;
