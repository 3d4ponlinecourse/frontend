import { useEffect, useState } from "react"
import useUser from "../../้hook/useUser"

const ResetPassword = () => {
  // const [password , setPassword] = useState<string>('')
  // const { user, isLoading, error } = useUser(id)

  // useEffect(() => {
  //   if (user) {
  //     setPassword(user)
  //   }
  // }, [user])
  
  return (
    <div className='flex flex-col w-1/2'>
      <p className='flex justify-start text-3xl font-bold'>Reset Password</p>
      <div className='grid gird-cols-1 gap-3 mt-10 mb-10'>
        <label className='flex justify-start font-semibold'>Old Password</label>
        <input className='border border-black rounded-3xl'></input>
        <label className='flex justify-start font-semibold'>New Password</label>
        <input className='border border-black rounded-3xl'></input>
        <label className='flex justify-start font-semibold'>Confirm Password</label>
        <input className='border border-black rounded-3xl'></input>
      </div>
      <div>
        <button className='flex justify-start font-bold border border-black rounded-3xl p-2'>Change Password</button>
      </div>
    </div>
  )
}

export default ResetPassword