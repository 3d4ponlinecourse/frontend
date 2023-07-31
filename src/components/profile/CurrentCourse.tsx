import React from 'react'
import CurrentCourseList from './CurrentCourseList'
import { IUserWithEnrollment } from '../../types/enrollment'
import Nonenroll from './Nonenroll'

export interface ICurrentCourseProps {
  user: IUserWithEnrollment
}

const CurrentCourse = ({ user }: ICurrentCourseProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Lasted Courses</p>
        <button className="text-s font-medium">SEE ALL</button>
      </div>
      <div>
        {user.enrollment.length === 0 ? (
          <Nonenroll />
        ) : (
          user.enrollment.map((enrollment) => <CurrentCourseList key={enrollment.courseName} enrollment={enrollment} />)
        )}
      </div>
    </div>
  )
}

export default CurrentCourse
