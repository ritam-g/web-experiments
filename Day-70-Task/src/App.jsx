import React from 'react'
import NavBar from './components/NavBar'
import SectionImage from './components/SectionImage'
import SectionBelow from './components/SectionBelow'
import Nav2 from './components/Nav2'
import LikeSection from './components/LikeSection'
function App() {
  return (
    <div className="main w-full p-4 ">
      <NavBar />
      <SectionImage/>
      <SectionBelow/>
      <Nav2/>
      <LikeSection src='https://images.unsplash.com/photo-1766068621525-804333ec0f11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D'/>
      
      <LikeSection src='https://images.unsplash.com/photo-1766068621525-804333ec0f11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D' rev="flex-row-reverse"/>
      
    </div>
  )
}

export default App
