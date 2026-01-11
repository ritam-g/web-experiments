import React from 'react'

function Navbar() {
  return (
    <div
     className
     ='
     Navbar
     lg:h-[5rem] w-full border-b-1 flex items-center justify-between  capitalize text-xl rounded-2xl pb-2
     '
     >
        <div className="left flex gap-2">
                <h1>Services</h1>
                <h1>Work</h1>
                <h1>About</h1>
        </div>
        <div className="mid flex gap-7 text-4xl font-bold h-full items-center">
            <img className='scale-100 h-full object-cover w-[5rem]   ' src="/images/o-logo.png" alt="" />
            <h1>Astratto</h1>
        </div>
        <div className="right flex items-center gap-[3rem]">
            <h1>Carreers</h1>

            <button className='border-purple-500 border-2 p-1 rounded-4xl'><a href="https://www.linkedin.com/in/ritammaty/">Contact us</a>  <i className="ri-arrow-right-up-line text-[2rem]"></i></button>
        </div>
      
    </div>
  )
}

export default Navbar
