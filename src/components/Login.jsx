import { useState } from 'react'
import './Login.css'
import {LoginModel} from "./LoginModel";
import {LoginPresenter} from "./LoginPresenter";

const Login = ({ onLogin }) => {
  const [model, setModel] = useState(new LoginModel())
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const presenter = new LoginPresenter(setModel, model)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!presenter.model.email.trim()) {
      setError('Por favor, ingresa un correo electrónico')
      return
    }

    if (!validateEmail(presenter.model.email)) {
      setError('Por favor, ingresa un correo electrónico válido')
      return
    }

    if (!password.trim()) {
      setError('Por favor, ingresa una contraseña')
      return
    }

    if (password.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres')
      return
    }

    onLogin(presenter.model.email)
    
    presenter.setEmail('')
    setPassword('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      presenter.setEmail(value)
      if (!value.trim()) {
        setError('Por favor, ingresa un correo electrónico')
        return
      }
      if (!validateEmail(value)) {
        setError('Por favor, ingresa un correo electrónico válido')
        return
      }
      setError('')
      return
    }
    if (name === 'password') {
      setPassword(value)
      if (!value.trim()) {
        setError('Por favor, ingresa una contraseña')
        return
      }
      if (value.length < 4) {
        setError('La contraseña debe tener al menos 4 caracteres')
        return
      }
      setError('')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={presenter.model.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

