import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import { CartProvider } from './context/CartContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
