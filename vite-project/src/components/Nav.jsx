import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">
          MyApp
        </h1>

        {/* NavLinks */}
        <ul className="flex gap-8 text-lg">
          
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 underline" : "text-gray-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 underline" : "text-gray-300"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 underline" : "text-gray-300"
                }`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={
                ({ isActive }) =>
                `hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 underline" : "text-gray-300"
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Nav;
