
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Dashboar from './components/Dashboar'
import Ele from './components/Ele'

function App() {
  return (
    <div className='bg-gray-600 h-screen w-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="dash" element={<Dashboar/>}>
            <Route path="profile" element={<Ele/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
