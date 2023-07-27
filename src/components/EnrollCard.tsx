import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'

const EnrollCard = () => {
  const Content = [
    {
      id: 1,
      courseName: 'Basics',
      videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
      imageUrl: 'https://threejs-journey.com/assets/images/program/chapter-01@2x.webp',
      duration: '9h 54mn',
      description:
        'Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.',
      comment: [],
      Lesson: [
        {
          id: 1,
          lessonName: 'Introduction',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '35mn',
        },
        {
          id: 2,
          lessonName: 'What is WebGL and why use Three.js',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '23mn',
        },
        {
          id: 3,
          lessonName: 'Basic scene',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '36mn',
        },
        {
          id: 4,
          lessonName: 'Local Server',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '41mn',
        },
        {
          id: 5,
          lessonName: 'Transform objects',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '46mn',
        },
        {
          id: 6,
          lessonName: 'Animations',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '30mn',
        },
        {
          id: 7,
          lessonName: 'Cameras',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '57mn',
        },
        {
          id: 8,
          lessonName: 'Fullscreen and resizing',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '30mn',
        },
        {
          id: 9,
          lessonName: 'Geometries',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '35mn',
        },
        {
          id: 10,
          lessonName: 'Debug UI',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '35mn',
        },
        {
          id: 11,
          lessonName: 'Textures',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '1h 14mn',
        },
        {
          id: 12,
          lessonName: 'Materials',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '1h 17mn',
        },
        {
          id: 13,
          lessonName: '3D Text',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '44mn',
        },
        {
          id: 14,
          lessonName: 'Go live',
          videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
          duration: '24mn',
        },
      ],
    },
  ]

  return (
    <div className="px-64">
      {Content.map((item) => (
        <>
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={item.imageUrl} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                {item.courseName}
              </Typography>
              <Typography>{item.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="teal">Enroll this course</Button>
            </CardFooter>
          </Card>
        </>
      ))}
    </div>
  )
}

export default EnrollCard
