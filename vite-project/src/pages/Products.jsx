import React, { useContext } from "react";
import { ProductData } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

function product() {
    // 1. Get the ENTIRE ARRAY of product objects
    const productsArray = useContext(ProductData); 
    let navigate=useNavigate()
    
    
    

    return (
        <div className="flex flex-wrap gap-6 justify-center p-4 bg-gray-50 min-h-screen">
            
            {/* 2. ***THIS IS THE KEY FIX***: Map over the array */}
            {productsArray.map((product,idx)=>{
                
                // Inside the map, 'product' is a single object {id: 1, title: '...', price: ...}
               return  <div
                    key={product.id} 
                    onClick={()=>{
                        navigate(`/products/${product.id}`)
                        
                    }}
                    className="
                        w-72
                        // ... (rest of your styling classes)
                        border border-gray-300
                        rounded-xl
                        bg-white
                        p-4
                        hover:border-indigo-500
                        hover:shadow-xl
                        transition duration-300
                        flex flex-col
                        justify-between
                    "
                >
                    {/* Access properties of the SINGLE 'product' object: */}
                    <div className="h-48 flex items-center justify-center mb-4 p-2">
                        <img
                            src={product.image} // Renders the image string
                            alt={product.title}
                            className="max-h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                        <p className="text-xs text-gray-500 capitalize">
                            {product.category} // Renders the category string
                        </p>
                        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[2.5rem]">
                            {product.title} // Renders the title string
                        </h2>
                        {/* ... rest of your product details ... */}
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                            <span className="text-lg font-bold text-indigo-600">
                                ₹{product.price.toFixed(2)}
                            </span>
                             <span className="text-sm text-gray-600 flex items-center gap-1">
                                <span className="text-yellow-400">★</span> 
                                {product.rating.rate}
                            </span>
                        </div>
                    </div>
                </div>
            
            })}
             </div>
    );
}

export default product;