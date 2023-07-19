import { useNavigate } from "react-router-dom"
import { useAuth } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";



const Courselist = () => {
   const navigate = useNavigate();
   const Courselist = useAuth();

  return (
    
    <div>
        <div className="">

        <h1 className="font-bold text-4xl indent-2">Course List</h1>
        <p className="text-xl indent-2">Let's Explore your new study</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full indent-2">
            Enroll this course</button>
        <p className="font-bold indent-2">Course</p>
        <p className="text-right indent-2">See all</p>
        <br />
        <br />
        <br />
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