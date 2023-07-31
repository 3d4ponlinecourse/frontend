import React from 'react'
import { Link } from 'react-router-dom'
import { IEnrollment } from '../../types/enrollment'
import { Button } from '@material-tailwind/react'

interface ICurrentCourseListProp {
  enrollment: IEnrollment
}

const CurrentCourseList = ({ enrollment }: ICurrentCourseListProp) => {
  return (
    <div>
      <div className="p-3 my-4 border border-teal-400 rounded-xl">
        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="flex flex-col col-start-1 col-span-3 ... p-2 ">
            <h4 className="flex justify-start">Course</h4>
            <Link to={`/learn/${enrollment.courseId}`}>
              <button className="flex justify-start font-bold">{enrollment.courseName}</button>
            </Link>
          </div>
          <div className="grid content-center">
            <Link to={`/learn/${enrollment.courseId}`}>
              <Button color="teal" variant="filled" className="w-60">
                Resume Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentCourseList
