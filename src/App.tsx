import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Courselist from './pages/user/Courselist'
import Editprofile from './components/Editprofile'
import Home from './pages/Home'
import React from 'react'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className='className="text-neutral-300 selection:bg-teal-300 selection:text-black"'>
      <Navbar />

      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courselist" element={<Courselist />} />
          <Route path="/editprofile" element={<Editprofile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
