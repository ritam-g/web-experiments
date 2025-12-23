import React from "react";

function Card({
  coverImage,
  profileImage,
  name,
  description,
  likes,
  posts,
  views
}) {
  return (
    <div className="relative h-[70vh] rounded-3xl w-[17rem] flex flex-col p-4 bg-white justify-around ">

      {/* TOP IMAGE */}
      <div className="top h-[20vh] rounded-2xl">
        <img
          className="object-cover h-full w-full rounded-2xl"
          src={coverImage}
          alt="cover"
        />
      </div>

      {/* MIDDLE PART */}
      <div className="midd p-4 h-[15vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="p-4 text-center">{description}</p>
      </div>

      {/* ABSOLUTE PROFILE IMAGE */}
      <div
        className="h-[5rem] w-[7rem] absolute bg-green-600 rounded-4xl flex
                   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          className="rounded-4xl h-full w-full object-cover"
          src={profileImage}
          alt="profile"
        />
      </div>

      {/* POST SECTION */}
      <div className="post rounded-3xl flex h-[15vh] justify-between shadow-2xl">
        <div className="h-full w-[32%] flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">{likes}</h1>
          <p>Likes</p>
        </div>

        <div className="h-full w-[32%] flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">{posts}</h1>
          <p>Posts</p>
        </div>

        <div className="h-full w-[32%] flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">{views}</h1>
          <p>Views</p>
        </div>
      </div>

      {/* BOTTOM ICONS */}
      <div className="bott h-[12vh] flex text-3xl items-center justify-around">
        <i className="ri-instagram-line"></i>
        <i className="ri-facebook-line"></i>
        <i className="ri-twitter-x-fill"></i>
      </div>
    </div>
  );
}

export default Card;
