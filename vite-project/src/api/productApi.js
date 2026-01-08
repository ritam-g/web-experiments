// getData.js

import axios from 'axios'

/**
 * Fetches product data from the fake store API.
 * * @returns {Promise<Array<Object>>} A promise that resolves to an array of product objects.
 */
async function getData() {
    // 1. Send the GET request
    const response = await axios.get('https://fakestoreapi.com/products')
    
    // 2. Destructure the response to get the data property directly.
    //    'response.data' is the array of product objects: [{...}, {...}, ...]
    const { data } = response;
    
    // 3. Return only the array of objects
    return data
}

export default getData