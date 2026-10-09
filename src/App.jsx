import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useApp } from './context/AppContext'
import BarberList from './pages/BarberList'
import MyBookings from './pages/MyBookings'
function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<BarberList />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/admin' element={<div>Admin Dashboard</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App