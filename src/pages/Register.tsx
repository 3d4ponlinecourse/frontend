

const Register = () => {

  return (
   
    <form className="flex flex-col gap-6 rounded-xl w-full my-14 py-5 px-7">
      <div>
        <h1>Lorem ipsum!</h1>
        <p>Lorem ipcwefwrgrthrswrjmutjtjk5j5yejreytjkut</p>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="email" placeholder="Email"  required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="username" placeholder="Username"  required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="password" placeholder="Password" required/>
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="password" placeholder="Confirm Password" required />
      </div>
      <div className="text-violet-600">
      <button className="text-violet-600 p-3 rounded-lg hover:bg-indigo-800">Register</button>
      </div>
    </form>
  )
}

export default Register