import React from 'react'
import Card from './components/Card'
function App() {
  return (
    <div className='main overflow-auto bg-gray-700 h-screen w-full p-[5rem] px-[15rem] flex flex-col gap-[1rem]'>
      
      <div className='flex justify-between'>
        <Card/>
        <Card/>
        <Card/>
      </div><div className='flex justify-between'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default App
