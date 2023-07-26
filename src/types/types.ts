export interface ContentDto {
    id: number
    courseName: string
    videoUrl: string
    imageUrl: string
    description: string
    duration: string
    comment: []
    Lesson: [
        {
            id: number
            lessonName: string
            videoUrl: string
            duration: string
        }
    ]
}


export interface UserDto {
    id: number
    username: string
    name: string
    registeredAt: string
}

