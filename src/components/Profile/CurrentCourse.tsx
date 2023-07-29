import React from 'react'
import { Link } from 'react-router-dom'
import { IUserWithEnrollment } from '../../types/enrollment'

export interface UserCourseProps {
  user: IUserWithEnrollment
}

const CurrentCourse = ({ user }: UserCourseProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Lasted Courses</p>
        <button className="text-s font-medium">SEE ALL</button>
      </div>
      <div className="p-3 m-5 border border-black rounded-3xl">
        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="flex flex-col col-start-1 col-span-3 ... p-2 ">
            <h4 className="flex justify-start">Course</h4>
            <a href="" className="flex justify-start font-bold">
              3D Fundamental
            </a>
            <a href="" className="flex justify-start font-bold">
              01 - Introduction to 3D modelling
            </a>
          </div>
          <div className="radial-progress">75%</div>
          <div className="flex items-center">
            <button className="border border-black p-2 rounded-3xl text-xs w-36 col-end-6">Resume Learning</button>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3 m-5 border border-black rounded-3xl">
          <div className="grid grid-cols-6 grid-rows-1 gap-4">
            <div className="flex flex-col col-start-1 col-span-3 ... p-2 ">
              <h4 className="flex justify-start">Course</h4>
              <Link to={`/learn`}>
                <button className="flex justify-start font-bold">{user.enrollment[0].courseName}</button>
                <button className="flex justify-start font-bold">Lesson Name</button>
              </Link>
            </div>
            <div className="radial-progress">{}</div>
            <div className="flex items-center">
              <Link to={`/learn`}>
                <button className="border border-black p-2 rounded-3xl text-xs w-36 col-end-6">Resume Learning</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentCourse
