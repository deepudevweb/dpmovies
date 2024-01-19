import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Details from './Pages/Details/Details.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Card } from '@mui/material'
import Home from './Pages/Home/Home.jsx'
import Navmovie from './Pages/Navmovie/Navmovie.jsx'
// import Togglebar from './Components/Navbar/Togglebar.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/'>
      {/* <Navbar /> */}
      <Route path="" element={<App/>} />
      <Route path="navbar" element={<Navbar/>} />
      <Route path="details/:id" element={<Details/>} />
      <Route path="card" element={<Card/>} />
      <Route path="home" element={<Home/>} />
      <Route path="navmovie" element={<Navmovie/>} />
      {/* <Route path="togglebar" element={<Togglebar/>} /> */}
    </Route>
  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <RouterProvider router={router} />
  </div>,
)
