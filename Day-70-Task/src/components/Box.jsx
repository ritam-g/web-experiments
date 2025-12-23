import React from 'react'

function Box(props) {
  return (
    <div className='Box h-[80%] w-[20%]  rounded-2xl  perspective-midrange shadow-emerald-200'>
      <img className='h-full w-full object-cover rounded-3xl rotate-y-27  ' src={props.src} alt="" />
    </div>
  )
}

export default Box
