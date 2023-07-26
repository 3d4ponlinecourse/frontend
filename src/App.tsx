import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './providers/AuthProvider'
import { Profile } from './pages/Profile'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Home from './pages/Home'
import Register from './pages/Register'



function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div>
      <Navbar />
      <Home />
      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
