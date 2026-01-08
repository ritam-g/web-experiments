import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function NavBar() {
  return (
    <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold tracking-wider">
              E-Store
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            
            {/* Home Link */}
            <Link 
              to="/" 
              className="text-gray-200 hover:bg-indigo-700 hover:text-white 
                         px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Home
            </Link>

            {/* Products Link (Button to change route) */}
            <Link 
              to="/products" 
              className="bg-indigo-500 text-white hover:bg-indigo-700 
                         px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out 
                         shadow-md hover:shadow-lg"
            >
              Products
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;