import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
