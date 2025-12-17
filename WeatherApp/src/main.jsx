import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Checktailwind from './checktailwind.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Checktailwind />
  </StrictMode>
)
