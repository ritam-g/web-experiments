import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import SectionTop from './components/SectionTop'
import AboveImage from './components/AboveImage'
import Bottom from './components/Bottom'

function App() {
  return (
    <>
      <main className='w-screen h-screen overflow-y-scroll
      lg: flex flex-col p-6 gap-8'>
        <Navbar/>
        <Section1/>
        <Section2/>
        <SectionTop first="Recent Project" snd="Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design"/>
        <AboveImage img="/images/single-house.png" t1="The Lighthouse" t2="Adding a new dimension to projects through thoughtfully designed 2D animations" img2="/images/timer.png"t3="Snowscape Haven"t4="Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary"/>
        <AboveImage img="/images/ice-house.png" t1="Navigating Possibilities" t2="Motion graphics breathe life into the project, blending direction and creativity" img2="/images/window.png"t3="Nocturnal Symphony"t4="Through 3D artistry, we orchestrate an animated ode to the evening, a dance of shadows and dreams"/>
        <Bottom/>
      </main>
    </>
  )
}

export default App
