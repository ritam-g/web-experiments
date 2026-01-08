import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          
          {/* Hero Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Discover Quality Products, <span className="text-indigo-600">Delivered Fast.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your one-stop shop for electronics, jewelry, and more. Browse our curated collection today!
            </p>
            
            {/* Call to Action Button */}
            <Link 
              to="/products" 
              className="mt-8 inline-block bg-indigo-600 text-white text-lg font-semibold 
                         py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 
                         transition duration-300 transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
          
          {/* Hero Image Placeholder (You can replace this with an actual image) */}
          <div className="md:w-1/2 flex justify-center">
             <div className="w-80 h-80 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-6xl font-bold">
                🛍️
             </div>
          </div>
        </div>
      </header>
      
      {/* 2. Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl text-indigo-600 mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-800">Fast Shipping</h3>
              <p className="mt-2 text-gray-500">Get your items delivered to your door in record time.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl text-indigo-600 mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-gray-800">Quality Guaranteed</h3>
              <p className="mt-2 text-gray-500">We only offer the best products from trusted brands.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl text-indigo-600 mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800">Secure Payments</h3>
              <p className="mt-2 text-gray-500">Shop with confidence using our secure payment gateway.</p>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* 3. Call to Action (CTA) Banner */}
      <section className="bg-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Explore?</h2>
          <p className="mt-3 text-lg text-indigo-200">
            Click below to browse our full catalog of amazing products.
          </p>
          <Link 
            to="/products" 
            className="mt-6 inline-block bg-white text-indigo-600 text-lg font-semibold 
                       py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 
                       transition duration-300 transform hover:scale-105"
          >
            Go to Products
          </Link>
        </div>
      </section>

      {/* Optional Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} E-Store. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default HomePage;