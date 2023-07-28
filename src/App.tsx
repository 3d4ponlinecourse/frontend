import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './providers/AuthProvider'
import { Profile } from "./pages/Profile"
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Learning from './pages/Learning'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  )
}

export default App