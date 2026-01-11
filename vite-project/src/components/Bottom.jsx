import React from 'react'

function Bottom() {
  return (
    <div className='bottom w-full  border-gray-400 border-1 
    lg:flex flex-col rounded-2xl pb-[5rem] pt-[5rem] gap-8
    '>
      <div className="top flex flex-col items-center
      lg:  text-5xl font-medium gap-6 p-8 border-b-2 ">
        <p className='text-[1.5rem] text-orange-400'>Open the door to forging your brand's story</p>
        <h1>Embark on a Transformative</h1>
        <h2>Journey Shaping Y</h2>
        <h3>Through Our Dedicated</h3>
        <h4>Partnership</h4>
        <div className="p">
              <p className='text-xl'>Join us on a transformative journey to shape your brand's destiny through</p>
        <p className='text-xl'>our dedicated partnership, crafting a narrative that resonates.</p>
      
        </div>
      </div>
      <div className="below flex items-center justify-between  p-5 text-xl">
        <div className="first">Via della Creatività, 23, 20121 Milano</div>
        <div className="snd">
            <div className="child flex text-4xl gap-8">
               <a href="https://www.instagram.com/ritam.maty/"> <i class="ri-at-line"></i></a>
                <a href="https://www.linkedin.com/in/ritammaty/"><i class="ri-linkedin-box-fill"></i></a>
                 <a href="https://x.com/maty_ritam"><i class="ri-twitter-x-fill "></i></a>
            </div>
            
        </div>
        <div className="child flex gap-6  ">
                <h1>Privacy & Cookie Policy</h1>
                <h1>Astratto © 2023</h1>
            </div>
      </div>
    </div>
  )
}

export default Bottom
