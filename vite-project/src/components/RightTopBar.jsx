import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

function RightTopBar() {
  return (
    <div className="w-full h-[4.5rem] px-6 flex items-center justify-between rounded-2xl
      bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">

      {/* 🔍 Search Bar */}
      <div className="flex items-center gap-3 w-[60%] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
        <FiSearch className="text-gray-300 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white w-full placeholder-gray-400"
        />
      </div>

      {/* 🔔 Notification + Profile */}
      <div className="flex items-center gap-5">
        
        {/* Bell */}
        <div className="relative">
          <FiBell className="text-white text-2xl cursor-pointer" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="profile"
          className="h-10 w-10 rounded-full object-cover border-2 border-white"
        />
      </div>
    </div>
  );
}

export default RightTopBar;
