import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Profile } from "./pages/Profile"


function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className=" font-Anuphan bg-zinc-800 min-h-screen text-zinc-200">
      <Navbar />
      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Home />
    </div>
  )
}

export default App
