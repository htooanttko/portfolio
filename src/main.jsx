import { StrictMode } from 'react'
import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { theme } from './libs/theme.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)
