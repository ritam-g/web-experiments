import React from 'react'

function Navbar() {
  return (
    <div
     className
     ='
     Navbar
     lg:h-[5rem] w-full border-b-1 flex items-center justify-between  capitalize text-xl rounded-2xl
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
        <div className="right flex gap-2">
            <h1>Carreers</h1>
            <button className=' border-2'>Contact us</button>
        </div>
      
    </div>
  )
}

export default Navbar
