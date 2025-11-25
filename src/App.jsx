import { useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setIsLoggedIn(true)
    setUser(userData)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="welcome-container">
          <h1>¡Bienvenido!</h1>
          <p>Has iniciado sesión correctamente con: <strong>{user}</strong></p>
          <button onClick={handleLogout} className="logout-btn">
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  )
}

export default App

