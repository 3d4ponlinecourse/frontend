import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Input, Button, Radio, Typography } from '@material-tailwind/react'
import React from 'react'

const Register = () => {
  const { register, login } = useAuth()
  const navigate = useNavigate()
  const [emailInput, setEmailInput] = useState<string>('')
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [nameInput, setNameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [conpasswordInput, setConPasswordInput] = useState<string>('')
  const [genderInput, setGenderInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await register(emailInput, usernameInput, nameInput, passwordInput, conpasswordInput, genderInput)
      await login(usernameInput, passwordInput)

      toast.success('Registered and Login!')
      navigate('/login')
    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md m-auto my-14 py-5 px-7">
      <div>
        <h1 className="text-4xl font-bold text-teal-400">REGISTRATION</h1>
        <p>Complete your profile and start your learning!</p>
      </div>
      <div className="flex flex-col gap-2">
        <Input className="text-neutral-400" color="teal" label="Name" onChange={(e) => setNameInput(e.target.value)} />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          color="teal"
          label="Email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          color="teal"
          label="Username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          type="password"
          color="teal"
          label="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="text-neutral-400"
          type="password"
          color="teal"
          label="Confirm Password"
          onChange={(e) => setConPasswordInput(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-start gap-4 ">
        <p className="mt-2">Gender:</p>
        <div className="flex flex-row flex-wrap">
          <Radio
            color="teal"
            id="Male"
            name="gender"
            label={<Typography className="text-neutral-400">Male</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
          ></Radio>
          <Radio
            color="teal"
            id="Female"
            name="gender"
            label={<Typography className="text-neutral-400">Female</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
          ></Radio>
          <Radio
            color="teal"
            id="LGBTIQA+ "
            name="gender"
            label={<Typography className="text-neutral-400">LGBTIQA+</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
          ></Radio>
          <Radio
            color="teal"
            id="PFNTS"
            name="gender"
            label={<Typography className="text-neutral-400">Prefer not to say</Typography>}
            onChange={(e) => setGenderInput(e.target.value)}
          ></Radio>
        </div>
      </div>

      <div className="text-violet-600">
        <Button color="teal" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default Register
