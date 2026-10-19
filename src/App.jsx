import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useApp } from './context/AppContext'
import BarberList from './pages/BarberList'
import MyBookings from './pages/MyBookings'
import Analytics from './components/Analytics'
function App() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden  text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<BarberList />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/admin' element={<div>Admin Dashboard</div>} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </main>
    </div>
  )
}

export default App