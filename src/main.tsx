import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const mainDom = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

mainDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)