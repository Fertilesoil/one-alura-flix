import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './Context/index.jsx'
import './index.css'
import Rotas from './Rotas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Rotas />
    </ContextProvider>
  </React.StrictMode>
)
