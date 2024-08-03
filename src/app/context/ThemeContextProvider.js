"use client"

import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider