// ./components/Section1.jsx
import React from 'react'
import { themeContexData } from '../context/ThemeContext';
import {useContext} from 'react'

function Section1() {
    // FIX: Use array destructuring to get the theme value
    const [theme] = useContext(themeContexData); 

    // Conditional classes for the section container
    const sectionClasses = theme === 'light'?
    'bg-white':`bg-gray-800`
        ;

    return (
        <div className={`flex justify-between items-center ${sectionClasses}`}>
            <h1 className="text-xl font-medium">Section 1 Content</h1>
            <h1 className="text-lg font-mono px-3 py-1 rounded-full bg-indigo-500 text-white">
                Theme: {theme}
            </h1>
        </div>
    )
}

export default Section1