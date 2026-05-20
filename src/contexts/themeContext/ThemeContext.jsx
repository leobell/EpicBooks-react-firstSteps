import { Children, createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {setIsDarkMode(!isDarkMode)}

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                toggleDarkMode
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}


