import React from 'react'
import SectionUpperPart from './SectionUpperPart'
import ImageBox from './ImageBox'

function Section() {
  return (
    <div className='Section h-[85vh] w-full bg-amber-950 rounded-3xl py-[1rem] '>
      <SectionUpperPart/>
    <ImageBox/>
    </div>
  )
}

export default Section
