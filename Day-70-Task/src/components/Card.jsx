import React from "react";

function Card({
  name,
  profession,
  image,
  rating,
  expert,
  number,
}) {
  return (
    <div className="p-[2px] rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="h-[35rem] w-[23rem] rounded-3xl bg-cover bg-center flex flex-col justify-end p-4"
      >
        {/* Name & profession */}
        <div className="text-white">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-300">{profession}</p>
        </div>

        {/* Expert & number */}
        <div className="flex gap-3 my-3">
          <span className="bg-black text-white px-4 py-2 rounded-xl">
            {expert}
          </span>
          <span className="border-2 border-white text-white px-5 py-2 rounded-full">
            {number}
          </span>
        </div>

        {/* Rating */}
        <div className="text-white font-bold text-xl flex justify-between">
          <span>⭐ {rating}</span>
          <span>Rating</span>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-4">
          <button className="text-4xl text-white">
            <i className="ri-chat-download-line"></i>
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-2xl">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
