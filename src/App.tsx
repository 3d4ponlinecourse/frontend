import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Home from './pages/Home'
import React from 'react'
import LearningPage from './pages/LearningPage'
import Profile from './pages/Profile'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="bg-white">
      <Navbar />

      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn" element={<LearningPage />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/contentcourse" element={<ContentCourse />} /> */}

          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}></Route>
      </Routes>
    </div>
  )
}

export default App
