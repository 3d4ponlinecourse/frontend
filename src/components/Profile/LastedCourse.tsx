import { Link, useParams } from "react-router-dom"

const LastedCourse = () => {
  // const { id } = useParams()
  // const { course, isLoading, error} = useCourse(id)
  
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <p className='text-3xl font-bold'>Lasted Courses</p>
        <button className='text-s font-medium'>SEE ALL</button>
      </div>
      <div className='p-3 m-5 border border-black rounded-3xl'>
        <div className='grid grid-cols-6 grid-rows-1 gap-4'>
          <div className='flex flex-col col-start-1 col-span-3 ... p-2 '>
            <h4 className='flex justify-start'>Course</h4>
            <a href='' className='flex justify-start font-bold'>3D Fundamental</a>
            <a href='' className='flex justify-start font-bold'>01 - Introduction to 3D modelling</a>
          </div>
          <div className="radial-progress" style={{"--value":75}}>75%</div>
          <div className='flex items-center'>
            <button className='border border-black p-2 rounded-3xl text-xs w-36 col-end-6'>Resume Learning</button>
          </div>  
        </div>
      </div>
      <div>
        <div className='p-3 m-5 border border-black rounded-3xl'>
        <div className='grid grid-cols-6 grid-rows-1 gap-4'>
          <div className='flex flex-col col-start-1 col-span-3 ... p-2 '>
            <h4 className='flex justify-start'>Course</h4>
            <Link to={`/learning/${course.id}`}>
              <button className='flex justify-start font-bold'>{course.courseName}</button>
              <button className='flex justify-start font-bold'>{lesson.lessonName}</button>
            </Link>
          </div>
          <div className="radial-progress" style={{"--value":75}}>{}</div>
          <div className='flex items-center'>
            <Link to={`/learning/${course.id}`}>
              <button className='border border-black p-2 rounded-3xl text-xs w-36 col-end-6'>Resume Learning</button>
            </Link>
          </div>  
        </div>
        </div>
      </div>
    </div>
  
  )
}

export default LastedCourse