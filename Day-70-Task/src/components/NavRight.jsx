import React from 'react'

function NavRight() {
  return (
      <div className="NavRight flex gap-2 text-2xl  px-6 h-full items-center">
      <button className="bg-gray-600 px-2 py-2 rounded-1xl rounded-2xl" >DESIGNERS</button>
      <button className="bg-gray-600 px-2 py-2 rounded-1xl rounded-2xl">COLLABS</button>
      <button className="bg-gray-600 px-2 py-2 rounded-1xl rounded-2xl">EVENTS</button>
      <button className="bg-gray-600 px-2 py-2 rounded-1xl rounded-2xl">BLOG</button>
      <button className="bg-gray-600 px-2 py-2 rounded-1xl rounded-2xl">CARD</button>
      <button className="bg-red-600 text-2.5xl px-6 py-3 rounded-2xl">
        GET IN TOUCH
      </button>
    </div>
  )
}

export default NavRight
