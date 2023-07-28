import { useState } from 'react'
import LastedCourse from '../components/Profile/CurrentCourse'
import ResetPassword from '../components/Profile/ResetPassword'
import Editprofile from '../components/Profile/Editprofile'
import useCourse from '../้hook/useCourse'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import useUser from '../้hook/useUser'
import useEnrollment from '../้hook/useEnrollment'
import useLesson from '../้hook/useLesson'
import CurrentCourse from '../components/Profile/CurrentCourse'



export const Profile = () => {
    // const { id } = useParams()
    const [ component, setChange ] = useState(<CurrentCourse />)
    // const { user, isLoading, error } = useUser(id || ``)
    
    // if (isLoading || !user) return <Loading />

  return (
    <div className='flex items-start w-full px-8 m-5 gap-8'>
        <div className='justify-center border border-black grid gap-y-16 rounded-3xl py-8 w-4/12'>
            <div>
                <div className='flex-col text-4xl grid gap-y-5 '>
                    <div>
                        <img src="download.jpg" className='rounded-full w-40 h-40'></img>
                    </div>
                        <h2 className=' font-bold'>Userman</h2>
                    {/* <h2 className=' font-bold'>{user.username}</h2> */}
                </div>
            </div>
            <div className='flex-col justify-start'>
                <div className='grid gap-y-8 text-2xl  flex-col'>
                    <button 
                    type="button" onClick={() => setChange(<CurrentCourse/>)}
                    className='flex justify-start font-semibold'>Lasted Course</button>
                    <button 
                    type="button" onClick={() => setChange(<Editprofile />)}
                    className='flex justify-start font-semibold'>Edit Profile</button>
                    <button 
                    type="button" onClick={() => setChange(<ResetPassword />)}
                    className='flex justify-start font-semibold'>Reset password</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            {component}
        </div>
    </div>
  )
}

export default Profile
