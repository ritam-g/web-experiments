import React from 'react'

function AboveImage({img,t1,t2,img2,t3,t4}) {
  return (
    <div className='AboveImage 
    lg: w-full flex gap-[15rem]  text-2xl  '>
      <div className="child flex flex-col gap-[4rem] h-auto ">
        <img className='object-cover rounded-4xl' src={`${img}`} alt="" />
        <div className="text flex flex-col gap-[1rem]">
            <h1 className='text-4xl text-purple-500'>{t1}</h1>
        <p className='text-xl'>{t2}</p>
     
        </div>
         </div>
      <div className="child flex flex-col gap-[4rem]">
        <img className='object-cover  pt-[10rem] rounded-3xl rounded-t-2xl' src={`${img2}`} alt="" />
        <div className="text flex flex-col gap-[1rem]">
            <h1 className='text-4xl text-purple-500'>{t3}</h1>
        <p className='text-xl'>{t4}</p>
     
        </div>
      </div>
    </div>
  )
}

export default AboveImage
