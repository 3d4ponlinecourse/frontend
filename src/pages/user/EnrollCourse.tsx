import React from 'react'

interface Course {
  courseName: string
  videoUrl: string
  duration: string
  description: string
}

interface User {
  id: number
  userId: string
  courseId: number
  courseName: string
  enrolledCourses: Course[]
}

const users: User[] = []
function addCourse(courses: Course): void {
  push(courses)
}





const EnrollCourse = () => {
  return <div>EnrollCourse</div>
}

export default EnrollCourse
