import React from 'react'

function Card() {
  return (
    <div className='h-[70vh]  rounded-3xl w-[17rem] flex flex-col p-4  bg-white gap-[1rem]'>
        <div className="top bg-green-200 h-[20vh] rounded-2xl">
            <img className='object-cover h-full w-full rounded-2xl' src="https://images.unsplash.com/photo-1765781127693-8dc9b9a91b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
        </div>


        <div className="midd p-4  h-[15vh] flex flex-col items-center-safe justify-center">
            <h1 className='text-2xl font-bold'>name</h1>
            <p className='p-4'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="post  flex h-[15vh] justify-between  rounded-1xl shadow-lg">
            <div className=" rounded-2xl bg-green-300 h-full w-[32%] flex flex-col items-center ">
                <h1> count</h1>
                <p>Likes</p>

            </div>
            <div className=" rounded-2xl bg-green-300 h-full w-[32%]">
                <h1> count</h1>
                <p>Posts</p>
            </div>
            <div className=" rounded-2xl bg-green-300 h-full w-[32%]">
                <h1> count</h1>
                <p>Views</p>
            </div>
        </div>
        <div className="bott bg-pink-300 h-[12vh]">bott</div>
      
    </div>
  )
}

export default Card
