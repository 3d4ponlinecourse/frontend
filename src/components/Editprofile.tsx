

const Editprofile = () => {
  return (
    <div className="flex flex-col gap-2" >
    
    <div className="text-center font-bold text-xls">Edit Your Profile here
        <div className="flex flex-col gap-6 rounded-xl my-14 py-5 px-7 indent-1">
        <input  className=''type="text"  placeholder="Firstname" />
        <input type="text"  placeholder="Lastname"/>
        <input type="email" placeholder="Email" />
            </div>


            <div className="bg-teal-400 hover:bg-teal-950 text-center text-white font-bold py-2 rounded-full indent-2 my-0.5">
            <button>Save Change</button>
        
</div>
</div>
</div>

  )

}





export default Editprofile