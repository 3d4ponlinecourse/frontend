import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import ContentCourse from './pages/ContentCourse'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contentcourse" element={<ContentCourse />} />

          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
