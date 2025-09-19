import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Cargando...</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
    <Analytics/> 
  </StrictMode>,
)