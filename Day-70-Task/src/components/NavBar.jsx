import React from 'react'
import NavLeftPart from './NavLeftPart'
import NavRight from './NavRight'

function NavBar() {
  return (
    <div className="h-28 w-full flex items-center justify-between text-white ">
      <NavLeftPart />
      <NavRight />
    </div>
  )
}

export default NavBar
