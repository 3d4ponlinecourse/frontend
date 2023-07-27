import { FormEvent, useEffect, useState } from 'react'
import useUser from '../../้hook/useUser'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../pages/Loading'
import React from 'react'

const ResetPassword = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState<string>('')
  const { user, isLoading, error } = useUser(id || '1')

  useEffect(() => {
    if (user) {
      setNewPassword(user)
    }
  }, [user])

  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      const res = await fetch(`http://localhost:8000/user/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          passsword: newPassword,
        }),
      })
      const data = await res.json()

      if (data.statusCode >= 400) {
        throw new Error(data.message)
      }

      navigate(`/profile/${id}`)
    } catch (err: any) {
      err.message
    }
  }

  if (isLoading || !user) return <Loading />

  return (
    <form onSubmit={handleResetPassword} className="flex flex-col w-1/2">
      <p className="flex justify-start text-3xl font-bold">Reset Password</p>
      <div className="grid gird-cols-1 gap-3 mt-10 mb-10">
        <label className="flex justify-start font-semibold">Old Password</label>
        <input className="border border-black rounded-3xl"></input>
        <label className="flex justify-start font-semibold">New Password</label>
        <input onChange={(e) => setNewPassword(e.target.value)} className="border border-black rounded-3xl"></input>
        <label className="flex justify-start font-semibold">Confirm Password</label>
        <input className="border border-black rounded-3xl"></input>
      </div>
      <div>
        <button className="flex justify-start font-bold border border-black rounded-3xl p-2">Change Password</button>
      </div>
    </form>
  )
}

export default ResetPassword
