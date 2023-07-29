import { IComment } from './comment'
import { IEnrollment } from './enrollment'
import { ILesson } from './lesson'

export interface ShowCourse {
  imageUrl: string
  courseName: string
  description: string
  duration: string
}

export interface ICreateCourse {
  courseName: string
  videoUrl: string
  duration: string
  description: string
}

export interface ICourse extends ICreateCourse {
  id: number
  enrollment?: IEnrollment[]
  lesson?: ILesson[]
  comment?: IComment[]
}
