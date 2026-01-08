import React, { createContext, useState, useEffect } from 'react';
import getData from '../api/productApi'; // This is the imported function

export const ProductData = createContext();

function ProductContext({ children }) {
    const [productData, setProductData] = useState([]);

    // Correct useEffect Usage
    useEffect(() => {
        // Define an async function inside the effect
        async function fetchProducts() {
            try {
                // Call the imported 'getData' function
                const data = await getData(); 
                setProductData(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        }
        
        // Execute the async function
        fetchProducts(); 
        
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <ProductData.Provider value={productData}>
            {children}
        </ProductData.Provider>
    );
}

export default ProductContext;