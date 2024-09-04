import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TabbedWidget from './TabbedWidget/TabbedWidget.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabbedWidget />
  </StrictMode>,
)
