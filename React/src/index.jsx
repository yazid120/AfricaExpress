import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './style/index.css'
import Router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)
