import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Home from './pages/Home'
import LearningPage from './pages/LearningPage'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="bg-white">
      <Navbar />

      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/contentcourse" element={<ContentCourse />} /> */}

          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}></Route>
        <Route path="/learn" element={<LearningPage />} />
      </Routes>
    </div>
  )
}

export default App
