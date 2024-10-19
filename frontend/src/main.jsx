import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { HabitContextProvider } from './contexts/HabitContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <HabitContextProvider>
        <App />
      </HabitContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
