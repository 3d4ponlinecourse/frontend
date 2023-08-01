import React from "react";

import { IUserWithEnrollment } from "../../types/enrollment";
import Nonenroll from "./Nonenroll";
import CurrentCourseList from "./CurrentCourseList";

export interface ICurrentCourseProps {
  user: IUserWithEnrollment;
}

const CurrentCourse = ({ user }: ICurrentCourseProps) => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Enrolled Courses</p>
      </div>
      <div>
        {user.enrollment.length === 0 ? (
          <Nonenroll />
        ) : (
          user.enrollment.map((enrollment) => (
            <CurrentCourseList
              key={(enrollment.courseName, enrollment.courseId)}
              enrollment={enrollment}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CurrentCourse;
