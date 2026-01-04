import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="h-[4rem] bg-gray-950 text-white flex items-center justify-around border-b border-gray-800">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg font-medium transition 
          ${isActive ? "text-indigo-500" : "text-gray-400 hover:text-white"}`
        }
        
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-lg font-medium transition 
          ${isActive ? "text-indigo-500" : "text-gray-400 hover:text-white"}`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/dash"
        className={({ isActive }) =>
          `text-lg font-medium transition 
          ${isActive ? "text-indigo-500" : "text-gray-400 hover:text-white"}`
        }
      >
        Dashboard
      </NavLink>

    </div>
  )
}

export default Navbar
