import React from 'react'

function Nav() {
  return (
    <div className='Nav  h-[14vh] w-full px-[2rem] bg-yellow-700 rounded-2xl flex items-center justify-between relative'>
      <h1 className='text-4xl font-bold capitalize gap-3 text-yellow-950'>View our <br /> latest works</h1>
    <a href="#" className='w-[50%] flex items-center justify-center p-2 text-xl italic '>
     We tried to design a new style to view <br /> ur new jewelrys to be more different than ever
    </a>
    </div>
  )
}

export default Nav
