import React from 'react'

function Text(props) {
  return (
    <div className='
    Text h-[5%] w-full  text-3xl capitalize flex items-center justify-between flex-shrink-0'>
      
      <h1 >{props.text}</h1>
      <button className='bg-gray-800 text-xl rounded-2xl p-0.5 '>See All</button>
    </div>
  )
}

export default Text
