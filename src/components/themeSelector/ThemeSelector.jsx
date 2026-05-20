import {Moon, Sun } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext/ThemeContext'

const ThemeSelector = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)
    const Icon = isDarkMode ? Sun : Moon
    const iconDarkMode = isDarkMode ? 'btn-outline-dark' : 'btn-outline-light'

    return (
        <button 
            className = {`btn ${iconDarkMode}`}
            onClick={toggleDarkMode}
        >
            <Icon />
        </button>

  )
}

export default ThemeSelector
