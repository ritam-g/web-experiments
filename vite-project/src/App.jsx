import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main className=' min-h-screen
    w-full
    grid grid-rows-[auto_1fr_auto]
    gap-1
    px-4 py-4
    md:px-12
    lg:px-56
        ' >
        <Header/>
        <Section/>
        <Footer/>

      </main>
    </>
  )
}

export default App
