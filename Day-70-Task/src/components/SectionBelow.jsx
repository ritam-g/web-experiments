import React from 'react'
import SectionBelowEle from './SectionBelowEle'

function SectionBelow() {
  return (
    <div className='h-[50vh] w-full flex justify-around  p-5'>
      <SectionBelowEle first="INDEPENDENCY" midd="Lorem ipsum dolor sit amet consectetur,
exercitationem cupiditate delectus illo odio

" last="LEARN MORE" />
  <SectionBelowEle first="UNIQUITY" midd="Lorem ipsum dolor sit amet consectetur,
exercitationem cupiditate delectus illo odio

" last="LEARN MORE" />
  <SectionBelowEle first="QUALITY" midd="Lorem ipsum dolor sit amet consectetur,
exercitationem cupiditate delectus illo odio

" last="LEARN MORE" />
  <SectionBelowEle first="SUSTAINABILITY" midd="Lorem ipsum dolor sit amet consectetur,
exercitationem cupiditate delectus illo odio

" last="LEARN MORE" />
    </div>
  )
}

export default SectionBelow
