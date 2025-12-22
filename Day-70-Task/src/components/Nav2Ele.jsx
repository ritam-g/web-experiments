import React from 'react'

function Nav2Ele(props) {
  return (
    <div className='h-[60%] w-[20rem] flex flex-col items-center '>
      <a href="#" className='text-2xl'> {props.header}</a>
      <h1 className='text-3xl'>{props.footer}</h1>
    </div>
  )
}

export default Nav2Ele
