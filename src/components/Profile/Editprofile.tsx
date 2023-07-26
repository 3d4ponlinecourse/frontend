import React from 'react'

const Editprofile = () => {
  return (
    <form className="flex flex-col gap-6 max-w-xs rounded-xl mx-auto my-14 py-5 px-7">
      <div className="flex flex-col gap-2 text-center font-bold text-xl">
        <h1>Edit your profile</h1>
      </div>

      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="text" placeholder="Firstname" required />
      </div>

      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="text" placeholder="Lastname" required />
      </div>
      <div className="flex flex-col gap-2">
        <input className="p-3 rounded" type="email" placeholder="Email" required />
      </div>
      <button className=" bg-teal-400 text-teal-50 p-3 rounded-lg hover:bg-teal-800">Save Change</button>
    </form>
  )
}

export default Editprofile
