import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useApp } from './context/AppContext'
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<div>Barber's list</div>} />
          <Route path='/my-bookings' element={<div>My-Bookings</div>} />
          <Route path='/admin' element={<div>Admin Dashboard</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App