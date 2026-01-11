import React from 'react'

function Section1() {
  return (
    <div className='Section1 relative text-black capitalize
    lg: w-full h-full flex' >
        <img
        className='absolute left-7 w-[17rem] h-[20rem] rotate-4'
        src="/images/baloon.png" alt="" />
      <div className="left w-[85%]
      lg: flex flex-col items-end  text-lg gap-[6rem]  
      
      ">
        <div className="left-c upper text-gray-500 w-full text-center"><h1>Igniting the Spark of Inspiration</h1></div>
        <div className="left-c lower 
        lg:text-8xl z-10 flex flex-col gap-4  w-full text-center
        ">
            <div className='w-full '>
                <h1>Unleash Your</h1>
            <h1 className='flex items-center gap-2 justify-center'>Brand
                 <img className=' lg:object-cover h-[5rem]
            ' src="/images/p-logo.png" alt="" /> 
             with Our</h1>
            <h1 className=' flex justify-center'><h1 className='bg-yellow-300 p-1 translate-z-[1rem] '>Magico</h1> Design</h1>
            </div>
            
        </div>
      </div>
      <div className="right w-[15%] flex flex-col items-end  gap-4">
        <button className='bg-purple-500 rounded-2xl p-2'>Via della Creativita. 23</button>

        <button className='bg-purple-500 rounded-2xl p-2'>20121 Mitano</button>
      </div>
      <img 
      className='absolute w-[17rem] h-[20rem] right-40 bottom-0 rotate-7'
      src="/images/houses.png" alt="" />
    </div>
  )
}

export default Section1
