enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE",
    LGBTQ = "LGBTQIA+",
    PREFERNOTTOSAY = "PREFER NOT TO SAY",
}

export interface UserDto {
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

export interface CourseDto {
    id: number
    courseName: string
    videoUrl: string
    imageUrl: string
    duration: string
    description: string
}