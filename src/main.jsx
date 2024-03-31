import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index.jsx'

// Radix Theme UI
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
        <App />
    </Theme>
  </React.StrictMode>,
)
