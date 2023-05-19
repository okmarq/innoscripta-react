/* eslint-disable react/prop-types */
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { AppContext } from "./services/AppContext"


function App({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [articles, setArticles] = useState(null)

  const value = { user, setUser, token, setToken, isAuth, setIsAuth, articles, setArticles }

  return (
    <AppContext.Provider value={value}>
      <Header />

      {children}

      <Footer />
    </AppContext.Provider>
  )
}

export default App
