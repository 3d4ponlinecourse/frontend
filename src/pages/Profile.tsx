import React from 'react'
import LastedCourse from './../components/Profile/LastedCourse'
import ResetPassword from './../components/Profile/ResetPassword'
import Editprofile from '../components/Profile/Editprofile'

export const Profile = () => {
  const [component, setChange] = useState(<LastedCourse />)

  return (
    <div className="flex items-start w-full px-8 m-5 gap-8">
      <div className="justify-center border border-black grid gap-y-16 rounded-3xl py-8 w-4/12">
        <div>
          <div className="flex-col text-4xl grid gap-y-5 ">
            <div>
              <img src="download.jpg" className="rounded-full w-40 h-40"></img>
            </div>
            <h2 className=" font-bold">Hack Cvit</h2>
          </div>
        </div>
        <div className="flex-col justify-start">
          <div className="grid gap-y-8 text-2xl  flex-col">
            <h3 className="flex justify-start font-semibold">Lasted Course</h3>
            <h3 className="flex justify-start font-semibold">Activity</h3>
            <h3 className="flex justify-start font-semibold">Edit Profile</h3>
            <h3 className="flex justify-start font-semibold">Reset password</h3>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div>
          <LastedCourse />
        </div>

        <div className="w-full">
          <Editprofile />
        </div>
        <div className="w-1/2">
          <ResetPassword />
        </div>
      </div>
    </div>
  )
}

export default Profile
