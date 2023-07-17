import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FiBox} from "react-icons/fi";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className=' w-full border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
    <div className="flex flex-wrap items-center justify-between  p-4">
      <Link to={'/'} className="flex items-center">
      <span className="flex text-blue-500 items-center gap-x-2"><FiBox/>3D4P </span>
      </Link>
   
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent 
      dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
 
       <li>
          <Link to="/register" className='"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent'>Join Us</Link>
          </li>
          <li>
      {isLoggedIn ? (
        <button onClick={logout} className="text-blue-600 font-semibold text-lg">
          Log out
        </button>
      ) : (
        <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent">
          Log In
        </Link>
      )}
      </li>
      </ul>
    </div>

    </nav>
  )
}

export default Navbar