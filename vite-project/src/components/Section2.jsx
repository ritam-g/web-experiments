// ./components/Section2.jsx
import React from 'react'
import { themeContexData } from '../context/ThemeContext';
import {useContext} from 'react'

function Section2() {
    // FIX: Use array destructuring to get the theme value
    const [theme] = useContext(themeContexData) 

    // Conditional classes for the section container
    const sectionClasses = theme === 'light'
        ? 'p-4 rounded-lg shadow-lg bg-white border border-gray-200'
        : 'p-4 rounded-lg shadow-2xl bg-gray-800 border border-gray-700';

    return (
        <div className={`flex justify-between items-center ${sectionClasses}`}>
            <h1 className="text-xl font-medium">Section 2 Content</h1>
            <h1 className="text-lg font-mono px-3 py-1 rounded-full bg-green-500 text-white">
                Theme: {theme}
            </h1>
        </div>
    )
}

export default Section2