import React from 'react'


export const Profile = () => {
  return (
    <div className='flex flex-nowrap justify-evenly '>
        <div className='justify-center border border-black grid gap-y-16 rounded-3xl py-8 w-4/12'>
            <div>
                <div className='flex-col text-4xl grid gap-y-5 '>
                    <div>
                        <img src="download.jpg" className='rounded-full w-40 h-40'></img>
                    </div>
                    <h2>Hack Cvit</h2>
                </div>
            </div>
            <div className='flex-col justify-start'>
                <div className='grid gap-y-8 text-2xl  flex-col'>
                    <h3>Lasted Course</h3>
                    <h3>Activity</h3>
                    <h3>Edit Profile</h3>
                    <h3>Reset password</h3>
                </div>
            </div>
        </div>
        <div className='border border-black rounded-3xl '>
            
            <h1>TEST</h1>
            <img src="download.jpg" className='rounded-full'></img>
        </div>
    </div>
  )
}

export default Profile
