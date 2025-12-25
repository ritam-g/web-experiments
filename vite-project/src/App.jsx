import React from 'react'
import LeftPart from './components/LeftPart'
import RightPart from './components/RightPart'

function App() {
  return (
    <div className='main h-screen w-screen bg-gray-700 p-4 flex gap-3 text-white no-scrollbar'>
      <LeftPart/>
      <RightPart/>
    </div>
  )
}

export default App
