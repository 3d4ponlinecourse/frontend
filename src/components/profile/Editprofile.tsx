import { Button, Input } from '@material-tailwind/react'
import React from 'react'

const Editprofile = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Edit Profile<span className="text-teal-400">.</span>
      </h2>
      <div className="grid gap-3 py-4 w-1/2 text-base ">
        <Input color="teal" type="text" label="Firstname" />
        <Input color="teal" type="text" label="Lastname" />
        <Input color="teal" type="email" label="Email" />
      </div>
      <Button color="teal">Save Change</Button>
    </div>
  )
}

export default Editprofile
