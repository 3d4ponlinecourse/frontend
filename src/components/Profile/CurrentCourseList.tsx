import React from 'react'
import { Link } from 'react-router-dom'
import { IEnrollment } from '../../types/enrollment'

interface ICurrentCourseListProp {
  enrollment: IEnrollment
}

const CurrentCourseList = ({ enrollment }: ICurrentCourseListProp) => {
  return (
    <div>
      <div className="p-3 m-5 border border-black rounded-3xl">
        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="flex flex-col col-start-1 col-span-3 ... p-2 ">
            <h4 className="flex justify-start">Course</h4>
            <Link to={`/learn`}>
              <button className="flex justify-start font-bold">{enrollment.courseName}</button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to={`/learn`}>
              <button className="border border-black p-2 rounded-3xl text-xs w-36 col-end-6">Resume Learning</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentCourseList
