// App.jsx
import {useContext} from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import { themeContexData } from './context/ThemeContext' // Make sure this path is correct

function App() {
  const [theme, settheme] = useContext(themeContexData) // Correct destructuring
  
  // Tailwind classes that change based on the theme
  const appClasses = theme === 'light' 
    ? 'bg-gray-100 text-gray-900 min-h-screen p-8 transition-colors duration-500'
    : 'bg-gray-900 text-gray-100 min-h-screen p-8 transition-colors duration-500';

  const buttonClasses = 'px-6 py-3 font-semibold rounded-lg shadow-md mt-8 transition-all duration-300 transform hover:scale-105';
  
  // Conditional button styling
  const themeButtonClasses = theme === 'light'
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400';

  return (
    // Apply the conditional classes to the main container
    <div className={appClasses}>
      <h1 className="text-3xl font-bold mb-6">Theme App ({theme.toUpperCase()})</h1>
      <div className="flex flex-col gap-4">
        <Section1/>
        <Section2/>
        <Section3/>
      </div>
      <button
        onClick={() => {
          // Simplified toggle logic
          settheme(theme === 'light' ? 'black' : 'light');
        }}
        className={`${buttonClasses} ${themeButtonClasses}`}
      >
        Toggle Theme to {theme === 'light' ? 'Black' : 'Light'}
      </button>
    </div>
  )
}

export default App