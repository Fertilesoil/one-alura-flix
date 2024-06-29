import React from 'react'
import ReactDOM from 'react-dom/client'
import ContextProvider from './Context/index.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { rotas } from './Rotas.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={rotas} />
    </ContextProvider>
  </React.StrictMode>
)
