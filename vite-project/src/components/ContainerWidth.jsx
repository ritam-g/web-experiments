import React from 'react'
import ContainerBoxWidthBase from './ContainerBoxWidthBase'

function ContainerWidth(props) {
  return (
    <div className="
  w-full 
  h-[25%] 
  bg-gray-600 
  flex 
  gap-4 
  flex-nowrap 
  overflow-x-auto 
  overflow-y-hidden
  no-scrollbar
  mt-1
  flex-shrink-0
">
  <ContainerBoxWidthBase />
  <ContainerBoxWidthBase />
  <ContainerBoxWidthBase />
  <ContainerBoxWidthBase />
  <ContainerBoxWidthBase />
  <ContainerBoxWidthBase />
  <ContainerBoxWidthBase />
</div>

  )
}

export default ContainerWidth
