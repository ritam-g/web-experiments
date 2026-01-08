import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const themeContexData=createContext()
function ThemeContext({children}) {
    const [theme, settheme] = useState('light')
  return (
    <div>
        <themeContexData.Provider value={[theme,settheme]}>
            {children}
        </themeContexData.Provider>
        
      
    </div>
  )
}

export default ThemeContext
