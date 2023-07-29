enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  LGBTQ = 'LGBTQ',
  PREFERNOTTOSAY = 'PREFERNOTTOSAY',
}

export interface ICreateUser {
  username: string
  password: string
  firstname: string
  lastname: string
  email: string
  gender: UserGender
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

// enum Role {
//   USER = "USER",
//   ADMIN = "ADMIN",
// }

export interface ICreateUser {
  username: string
  password: string
  firstname: string
  lastname: string
  email: string
  gender: UserGender
}

export interface IUser extends ICreateUser {
  id: string
  registeredAt: Date
}

// export type UserRole = keyof typeof Role;

// export function mapRole(role: Role): UserRole {
//   return role;
// }

export type UserGender = keyof typeof Gender

// export function mapGender(gender: Gender): UserGender {
//   return gender;
// }
