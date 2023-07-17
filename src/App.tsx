import { Route, Routes } from "react-router-dom"
import './App.css' 
import { useAuth } from "./providers/AuthProvider"
import Navbar from "./components/Navbar"
import GuardedRoute from "./guards/GuardedRoute"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  const { isLoggedIn } = useAuth()


  return (
    <>
    <Navbar/>
    <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/register" element={<Register />} />
        </Route>
   </Routes>
   </>
  )
}

export default App