import React from 'react'
import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useProfile from '../../hooks/useProfile'

const Editprofile = () => {
  const { user } = useProfile()
  const navigate = useNavigate()
  const [newFirstname, setFirstname] = useState<string>('')
  const [newLastname, setLastname] = useState<string>('')
  const [newEmail, setEmail] = useState<string>('')

  useEffect(() => {
    if (user) {
      setFirstname(user['firstname'])
      setLastname(user['lastname'])
      setEmail(user.email)
    }
  }, [user])

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    try {
      const res = await fetch(`http://localhost:8000/enroll//update/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstname: newFirstname,
          lastname: newLastname,
          email: newEmail,
        }),
      })
      const data = await res.json()

      if (data.statusCode >= 400) {
        throw new Error(data.message)
      }

      toast.success('Succesfully edited!')
      navigate(`/`)
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className="flex flex-col gap-2 w-1/2">
      <div className="text-center font-bold text-xls">
        Edit Your Profile here
        <div className="flex flex-col gap-6 rounded-xl my-14 py-5 px-7 indent-1">
          <input className="" type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="email" placeholder="Email" />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>
        </div>
        <div className="bg-teal-400 hover:bg-teal-950 text-center text-white font-bold py-2 rounded-full indent-2 my-0.5">
          <button>Save Change</button>
        </div>
      </div>
    </div>
  )
}

export default Editprofile
