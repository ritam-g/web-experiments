import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Products from './pages/Products'
import NavBar from './context/components/NavBar'
import HomePage from './pages/HomePage'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <div className='w-screen h-screen overflow-y-scroll'>
      <NavBar/>
      <Routes>
         <Route path='/' element={<HomePage/>} /> 
        <Route path='/products' element={<Products/>}/> 
        <Route path='/products/:id' element={<SingleProduct/>}/> 
       
        </Routes>
    </div>
  )
}

export default App
