enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  LGBTQ = 'LGBTQ',
  PREFERNOTTOSAY = 'PREFERNOTTOSAY',
}

export interface User {
  id: number
  username: string
  password: string
  firstname: string
  lastname: string
  profilePic: string
  email: string
  gender: Gender
  googleaccount?: string
  facebookaccount?: string
}

export interface Course {
  id: number
  courseName: string
  videoUrl: string
  imageUrl: string
  duration: string
  description: string
}
