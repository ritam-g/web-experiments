import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    async function call() {
    let res=await axios.get('http://localhost:3000/api/user')
    const {users}=res.data
    setusers(users)
  }
  call()
  }, [])
  
  
  
  return (
    <>
      <main className='h-screen w-screen bg-gray-600'>
      {
        users.map((user,id)=>{
         return <h1>
              <p>{user.userName}</p>
                <p>{user.age}</p>
         </h1>
         
        })
      }
      </main>
    </>
  )
}

export default App
