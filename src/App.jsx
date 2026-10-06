import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useApp } from './context/AppContext'
import BarberCard from './components/BarberCard'
function App() {
  const testBarber = {
    name: "Ali Valiyev",
    avatar: "https://via.placeholder.com/150",
    rating: 4.8,
    age: 28,
    experience: "5 yil",
    languages: ["UZ", "EN"],
    phone: "+998901234567"
  };
  return (
    <div>
      <Navbar />
      <BarberCard barber={testBarber} />
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