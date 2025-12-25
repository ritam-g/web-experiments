import React from 'react'

import Section from './Section'
import Text from './Text'
import ContainerWidth from './ContainerWidth'
import RightTopBar from './RightTopBar';

function RightPart() {
  return (
    <div className='RightPart w-[80%] h-[100%] 0 rounded-2xl flex flex-col overflow-y-scroll  flex-nowrap
    overflow-x-hidden
    overflow-y-auto
    no-scrollbar
   '>
      <RightTopBar/>
      <Section/>
      <Text text="continue watching"/>
      <ContainerWidth size="lg"/>
      <Text text="you might like"/>
      <ContainerWidth/>
      <Text text="continue watching"/>
      <ContainerWidth/>
      <Text text="you might like"/>
      
      <ContainerWidth/>
      <Text text="continue watching"/>
      
      <ContainerWidth/>
      
    </div>
  )
}

export default RightPart
