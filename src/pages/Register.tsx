import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FormEvent, useState } from 'react'
import { toast } from "react-hot-toast";




const Register = () => {
    const { register, login } = useAuth();
    const navigate = useNavigate();
    const [emailInput, setEmailInput] = useState<string>('')
    const [usernameInput, setUsernameInput] = useState<string>('')
    const [firstnameInput, setFirstnameInput] = useState<string>('')
    const [lastnameInput, setLastnameInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [conpasswordInput, setConPasswordInput] = useState<string>('')
    const [genderInput, setGenderInput] = useState<string>('')
    const [roleInput, setRoleInput] = useState<string>('')
    
    
    

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
   


   try {
     await register(emailInput, usernameInput, firstnameInput, lastnameInput, passwordInput, conpasswordInput, genderInput,roleInput)
     await login(usernameInput,passwordInput)

     toast.success('Registered and Login!')
     navigate('/login')
   } catch(err:any) {
    console.log(err)
    toast.error(err.message)
   }
  }


  return (
   
    <form 
    onSubmit={handleSubmit}
    className="flex flex-col gap-6 rounded-xl w-full my-14 py-5 px-7">
      <div>
        <h1>REGISTRATION</h1>
        <p>Complete your profile and start learning!</p>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="email"placeholder="Email" onChange={(e)=> setEmailInput(e.target.value)} required/>

      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="username" placeholder="Username" onChange={(e)=> setUsernameInput(e.target.value)}  required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="firstname" placeholder="Firstname" onChange={(e)=> setFirstnameInput(e.target.value)}  required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="lastname" placeholder="Lastname" onChange={(e)=> setLastnameInput(e.target.value)}  required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="password" placeholder="Password" onChange={(e)=> setPasswordInput(e.target.value)} required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="password" placeholder="Confirm Password" onChange={(e)=> setConPasswordInput(e.target.value)} required />
      </div>
      <div className="flex gab-5">
      <p>Gender:</p>
       <input className="p-3 rounded"  type='radio' id='Male' name='gender' value='Male' onChange={(e)=> setGenderInput(e.target.value)}></input>
       <label htmlFor="Male">Male</label>
       <input type='radio' id='Female' name='gender' value='Female' onChange={(e)=> setGenderInput(e.target.value)}></input>
       <label htmlFor="Female">Female</label>
       <input type='radio' id='LGBTIQA+ ' name='gender' value='LGBTIQA+' onChange={(e)=> setGenderInput(e.target.value)}></input>
       <label htmlFor="LGBTIQA+ ">LGBTIQA+ </label>
       <input type='radio' id='none ' name='gender' value='none' onChange={(e)=> setGenderInput(e.target.value)}></input>
       <label htmlFor="none">Prefer not to say.</label>
       </div>
       <div className="flex gab-5">
      <p>Role:</p>
       <input className="p-3 rounded"  type='radio' id='learner' name='learner' value='learner' onChange={(e)=> setRoleInput(e.target.value)}></input>
       <label htmlFor="student">Learner</label>
       <input type='radio' id='instuctor' name='instuctor' value='instuctor' onChange={(e)=> setRoleInput(e.target.value)}></input>
       <label htmlFor="instuctor">Instuctor</label>
       </div>



      <div className="text-violet-600">
      <button className="text-violet-600 p-3 rounded-lg hover:bg-indigo-800" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Register