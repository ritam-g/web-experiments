import React from 'react'
import Nav from './components/Nav'
import Section from './components/Section'

function App() {
  return (
    <div className='perspective-[1200px] main h-screen bg-yellow-800 py-[2rem] px-[6rem] overflow-hidden flex flex-col gap-[1vh] '>
      <Nav/>
      <Section/>
    </div>
  )
}

export default App
