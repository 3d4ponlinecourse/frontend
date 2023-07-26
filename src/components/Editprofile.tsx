const Editprofile = () => {
  return (
    <div>
      <body className="bg-teal-950">
        <div className="flex place-content-center bg-zinc-600">
          For Profile Content
          <div className="font bold text-xl">
            Edit Your Profile here
            <div className="grid gap-3 mb-6 text-base">
              <input className="" type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="bg-teal-400 hover:bg-teal-950 text-white font-bold py-2 rounded-full indent-2">
              <button>Save Change</button>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Editprofile
