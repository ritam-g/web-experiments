import React from 'react'
import Nav2Ele from './Nav2Ele'

function Nav2() {
    const statsData = [
  {
    header: "DESIGNS",
    value: "150+",
  },
  {
    header: "CLIENTS",
    value: "500+",
  },
  {
    header: "MASTERPIECES",
    value: "20K+",
  },
  {
    header: "EVENTS",
    value: "50+",
  },
];
  return (
    <div className='h-[20vh] w-full text-white flex items-center  justify-between'>
      {statsData.map(({header,value})=>{
        return<Nav2Ele header={header} footer={value}/>
      })}
    </div>
  )
}

export default Nav2
