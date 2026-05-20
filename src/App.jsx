import MyNav from "./components/myNav/MyNav"
import MyFooter from "./components/myFooter/MyFooter"
import MyMain from "./components/myMain/MyMain"
import { useContext, useState } from "react"
import { ThemeContext, ThemeProvider } from "./contexts/themeContext/ThemeContext"

const App = () => {

  const [inputSearchBook, setInputSearchBook] = useState('')
  const updateSearch = (v) => setInputSearchBook(v)
  const { isDarkMode } = useContext(ThemeContext)
  const computedTheme = isDarkMode
    ? 'bg-light text-dark min-vh-100'
    : 'bg-dark text-light min-vh-100'

  console.log(inputSearchBook)

  return (

    <div className={`${computedTheme}`}>
      <MyNav
        updateSearch={updateSearch}
      />
      <MyMain 
        searchBook={inputSearchBook}
      />
      <MyFooter />
    </div>
        
  )
}

export default App
