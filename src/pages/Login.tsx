import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(usernameInput, passwordInput)

      toast.success('Logged In!')
      navigate('/')
    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-w-xs rounded-xl mx-auto my-14 py-5 px-7"
    >
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="text" placeholder='Username' onChange={(e) => setUsernameInput(e.target.value)} required />
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="password" placeholder='Password' onChange={(e) => setPasswordInput(e.target.value)} required />
      </div>
      <div className=' text-blue-600'>
         <p><span>Forgot your password?</span></p>
      </div>
      <button className="text-blue-600 p-3 rounded-lg hover:bg-indigo-800">Login</button>
      
      <div className='text-blue-600  '>
      <p> Not a member yet?  
        <Link to={'/register'}>
        <span className='font-bold text-white underline '>Sign up for free</span>
        </Link>
        </p>
      </div>
    </form>
  )
}

export default Login