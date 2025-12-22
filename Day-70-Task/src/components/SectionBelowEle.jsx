import React from 'react'

function SectionBelowEle(props) {
  return (
    <div className=' w-[20rem] text-white bg-gray-700 text-2xl flex flex-col p-4 justify-around pl-6 rounded-2xl' >
      <h1 className=''>{props.first}</h1>
      <p className='text-xl'>{props.midd}
    </p>
    <h1 className='flex gap-1'> <button className=' text-white rounded-2xl'> <i class="ri-search-line"></i></button>{props.last} </h1>
    </div>
  )
}

export default SectionBelowEle
