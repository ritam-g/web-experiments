import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductData } from '../context/ProductContext'; 

function SingleProduct() {
    
    // 1. EXTRACT THE ID FROM THE URL
    // useParams returns an object like { id: '5' }
    const { id } = useParams(); 
    
    // The ID from the URL is always a string. Convert it to a number 
    // to match the product IDs which are usually numbers.
    const productId = parseInt(id); 

    // 2. ACCESS THE FULL PRODUCT ARRAY FROM CONTEXT
    const productsArray = useContext(ProductData);

    // 3. FIND THE MATCHING PRODUCT OBJECT
    // The find method returns the first object that satisfies the condition.
    const product = productsArray.find(p=>p.id===productId);

    // --- Loading and Error Handling ---
    
    if (!productsArray || productsArray.length === 0) {
        // This handles cases where data might still be loading in the context
        return <div className="p-10 text-center text-xl text-gray-500">Loading product data...</div>;
    }

    if (!product) {
        // This handles cases where the ID in the URL does not match any product
        return <div className="p-10 text-center text-2xl text-red-600">
            Error: Product with ID {id} not found.
        </div>;
    }
    
    // 4. RENDER THE SINGLE PRODUCT'S DETAILS
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl my-10 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">{product.title}</h1>
            <div className="flex flex-col md:flex-row gap-10">
                
                {/* Image Section */}
                <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                    <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
                </div>
                
                {/* Details Section */}
                <div className="md:w-1/2">
                    <p className="text-sm text-indigo-600 uppercase font-medium tracking-wider">{product.category}</p>
                    
                    <p className="text-4xl font-extrabold text-green-600 mt-4">
                        ₹{product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-3">
                        <span className="text-yellow-500 text-lg mr-2">⭐⭐⭐⭐⭐</span>
                        <span className="text-gray-700">{product.rating.rate} out of 5 ({product.rating.count} reviews)</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2 border-b pb-1">Description</h2>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;