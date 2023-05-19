import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Articles from './pages/Articles'
import App from './App'

const router = createBrowserRouter([
  {
    path: "register",
    element: <App><Register /></App>,
  },
  {
    path: "login",
    element: <App><Login /></App>,
  },
  {
    path: "/",
    element: <App><Articles /></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
