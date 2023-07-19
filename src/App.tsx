import { Route, Routes } from "react-router-dom"
import './App.css' 
import { useAuth } from "./providers/AuthProvider"
import Navbar from "./components/Navbar"
import GuardedRoute from "./guards/GuardedRoute"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"
// import { Profile } from "./pages/user/Profile"
import Editprofile from "./components/Editprofile"


function App() {
  const { isLoggedIn } = useAuth()


  return (
    <>
    <Navbar/>
    <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editprofile" element={<Editprofile />} />

        </Route>  
        {/* <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/profile" element={<Profile />} />
        </Route>   */}
   </Routes>
   </>
  )
}

export default App