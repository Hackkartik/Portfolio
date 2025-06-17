import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './hero.css'
import './about.css'
import './contact.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
