import { Route, Routes } from "react-router-dom"
import './App.css' 
import { useAuth } from "./providers/AuthProvider"
import Navbar from "./components/Navbar"
import GuardedRoute from "./guards/GuardedRoute"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"
import Courselist from "./pages/user/Courselist"
import Editprofile from "./components/Editprofile"
import Home from "./pages/Home"


function App() {
  const { isLoggedIn } = useAuth()


  return (
    <>
    <Navbar/>
    <Home/>
    <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/courselist" element={<Courselist/>} />
           <Route path="/editprofile" element={<Editprofile/>} />
        </Route>  
        
   </Routes>
   </>
  )
}

export default App