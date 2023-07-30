import React from 'react'
import { useState } from 'react'
import Editprofile from '../components/profile/Editprofile'
import useProfile from '../hooks/useProfile'
import Loading from '../components/Loading'
import CurrentCourse from '../components/profile/CurrentCourse'

export const Profile = () => {
  const [component, setComponent] = useState<number>(0)
  const { user, isLoading } = useProfile()
  console.log(user)
  if (isLoading || !user) return <Loading />

  return (
    <div className="flex items-start w-full px-8 m-5 gap-8">
      <div className="justify-center border border-black grid gap-y-16 rounded-3xl py-8 w-4/12">
        <div>
          <div className="flex-col text-4xl grid gap-y-5 ">
            <div>
              <img src="download.jpg" className="rounded-full w-40 h-40"></img>
            </div>
            <h2 className=" font-bold">
              {user['firstname']}
              {user['lastname']}
            </h2>
          </div>
        </div>
        <div className="flex-col justify-start">
          <div className="grid gap-y-8 text-2xl  flex-col">
            <button type="button" onClick={() => setComponent(0)} className="flex justify-start font-semibold">
              Lasted Course
            </button>
            <button type="button" onClick={() => setComponent(1)} className="flex justify-start font-semibold">
              Edit Profile
            </button>
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
