import React from 'react'

function LikeSection(props) {
  console.log(props.rev);
  if (props.rev) {
    return (
    <div className='h-[80vh] w-full pt-[1rem] flex   justify-between rounded-2xl flex-row-reverse'>
      <div className='h-full w-[48%]  text-white bg-gray-600 flex flex-col items-center justify-around p-8 rounded-3xl text-5xl'>
      <h1>WHERE FASHION MEETS
FREEDOM</h1>
      <p className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla?</p>

      </div>


      <div className='h-full w-[48%] bg-red-600 rounded-3xl'>
        <img src={props.src} alt="" className='object-cover h-full w-full rounded-3xl' />
      </div>
    </div>
  )
  } else {
    return (
    <div className='h-[80vh] w-full pt-[1rem] flex justify-between rounded-2xl '>
      <div className='h-full w-[48%]  text-white bg-gray-600 flex flex-col items-center justify-around p-8 rounded-3xl text-5xl'>
      <h1>WHERE FASHION MEETS
FREEDOM</h1>
      <p className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla?</p>

      </div>


      <div className='h-full w-[48%] bg-red-600 rounded-3xl'>
        <img src={props.src} alt="" className='object-cover h-full w-full rounded-3xl' />
      </div>
    </div>
  )
  }
  
}

export default LikeSection
