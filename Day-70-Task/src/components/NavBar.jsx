import React from 'react'
import NavLeftPart from './NavLeftPart'
import NavRight from './NavRight'

function NavBar() {
  return (
    <div className="h-[15vh] w-full flex items-center justify-between text-white  px-4">
      <NavLeftPart />
      <NavRight />
    </div>
  )
}

export default NavBar
