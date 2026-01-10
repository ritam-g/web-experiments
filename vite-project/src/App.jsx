import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  return (
    <>
      <main className='w-screen h-screen overflow-y-scroll
      lg: flex flex-col p-6 gap-8'>
        <Navbar/>
        <Section1/>
        
        <Section2/>
      </main>
    </>
  )
}

export default App
