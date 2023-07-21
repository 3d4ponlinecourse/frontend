import { useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'



const Courselist = () => {
   const navigate = useNavigate();
   const Courselist = useAuth();

  return (
    
    <div>
        <div className="">

        <h1 className="text-7xl font-bold leading-normal">Course List</h1>
        <p className="text-5xl font-bold">Let's Explore your new study.</p>
        
        <div>
          <Link to="/login">
          <button className="button-3d4p">Enroll this course</button>
          </Link>
          <div className="text-2xl flex flex-row">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <BsDiscord />
          </div>
         </div>   
        <p className="font-bold indent-2">Course</p>
        <p className="text-right indent-2">See all</p>
      
   </div>
        <div className="grid grid-cols-3 gap-4">
        <div className="box-border h-32 w-32 border-2 p-6">Box1
            <p>Detail</p>
        </div>
        <div className="box-border h-32 w-32 border-2 p-6 ">Box2
            <p>Detail</p>
        </div>
        <div className="box-border h-32 w-32 border-2 p-6">Box3
            <p>Detail</p>
        </div>
        <div className="box-border h-32 w-32 border-2 p-6">Box4
           <p>Detail</p>
        </div>
        <div className="box-border h-32 w-32 border-2 p-6">Box5
           <p>Detail</p>
        </div>
        <div className="box-border h-32 w-32 border-2 p-6">Box6
           <p>Detail</p>
        </div>
        </div>
      
        <p>
        <Link to='/'>
            See More...
        </Link>
        </p>
      <footer>3D4P</footer>
    </div>
    
    
    
      
    

  )
}

export default Courselist