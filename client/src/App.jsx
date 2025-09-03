import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home' 
import Movies from './pages/movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'

// import Layout from './layouts/admin/Layout'
import { Dashboard } from './pages/admin/Dashboard'
import { AddShows } from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import { ListBookings } from './pages/admin/ListBookings'

export const App = () => {

const isAdminRoutes=useLocation().pathname.startsWith('/admin') 

  return (
    <>
<Toaster/>

     {!isAdminRoutes && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
      <Route path="/movies/:id/:date/my-bookings" element={<MyBooking />} />
      <Route path="/favourite" element={<Favourite/>} />
      <Route path='/admin/*'element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="add-shows"element={<AddShows/>}/>
      <Route path="list-shows" element={<ListShows/>}/>
      <Route path="list-bookings" element={<ListBookings/>}/>
      </Route>
      </Routes>

      {!isAdminRoutes && <Footer/>}
    </>
  )
}

export default App
