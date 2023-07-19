import React from 'react'
import LastedCourse from '../../components/Profile/LastedCourse'
import Activity from '../../components/Profile/Activity'


export const Profile = () => {
  return (
    <div className='flex flex-nowrap justify-between px-8 m-5 gap-5'>
        <div className='justify-center border border-black grid gap-y-16 rounded-3xl py-8 w-4/12'>
            <div>
                <div className='flex-col text-4xl grid gap-y-5 '>
                    <div>
                        <img src="download.jpg" className='rounded-full w-40 h-40'></img>
                    </div>
                    <h2 className=' font-bold'>Hack Cvit</h2>
                </div>
            </div>
            <div className='flex-col justify-start'>
                <div className='grid gap-y-8 text-2xl  flex-col'>
                    <h3 className='flex justify-start font-semibold'>Lasted Course</h3>
                    <h3 className='flex justify-start font-semibold'>Activity</h3>
                    <h3 className='flex justify-start font-semibold'>Edit Profile</h3>
                    <h3 className='flex justify-start font-semibold'>Reset password</h3>
                </div>
            </div>
        </div>
        <div className='border border-black rounded-3xl p-1'>
            <LastedCourse />
            {/* <Activity /> */}
        </div>
    </div>
  )
}

export default Profile
