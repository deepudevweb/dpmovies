import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Details from './Pages/Details.jsx'
import Navbar from './Components/Navbar.jsx'
import { Card } from '@mui/material'
import Overlay from './Pages/Overlay.jsx'
import EmblaCarousel from './Pages/Emblacrouser/EmblaCarousel.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/'>
      {/* <Navbar /> */}
      <Route path="" element={<App/>} />
      <Route path="details/:id" element={<Details/>} />
      <Route path="overlay" element={<Overlay/>} />
      <Route path="card" element={<Card/>} />
      <Route path="emblacrousel" element={<EmblaCarousel/>} />
    </Route>
  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <RouterProvider router={router} />
  </div>,
)
