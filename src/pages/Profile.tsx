import React from 'react'
import { useState } from 'react'
import Editprofile from '../components/profile/Editprofile'
import useProfile from '../hooks/useProfile'
import Loading from '../components/Loading'
import CurrentCourse from '../components/profile/CurrentCourse'
import { Avatar, Button } from '@material-tailwind/react'

export const Profile = () => {
  const [component, setComponent] = useState<number>(0)
  const { user, isLoading } = useProfile()
  console.log(user)
  if (isLoading || !user) return <Loading />

  return (
    <div className="flex items-start px-4 md:px-12 lg:px-64  gap-8">
      <div className="justify-center border border-teal-400 flex flex-col items-center gap-y-16 rounded-xl py-8 w-4/12">
        <div>
          <div className="flex-col text-2xl flex items-center gap-4 ">
            <div>
              <Avatar
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="avatar"
                size="xxl"
                className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
              />
            </div>
            <div className="flex flex-col ">
              {' '}
              <h2 className="font-bold">{user['firstname']}</h2>
              <h2 className="font-bold">{user['lastname']}</h2>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start">
          <div className="grid gap-4 text-2xl  flex-col">
            <Button color="teal" variant="outlined" onClick={() => setComponent(0)}>
              Lasted Course
            </Button>
            <Button color="teal" variant="outlined" type="button" onClick={() => setComponent(1)}>
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        {component === 0 ? <CurrentCourse user={user} /> : null}
        {component === 1 ? <Editprofile /> : null}
      </div>
    </div>
  )
}

export default Profile
