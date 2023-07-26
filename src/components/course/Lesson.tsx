import React from 'react'

interface IContent {
  id: number
  lessonName: string
  videoUrl: string
  duration: string
}

const Content: IContent[] = [
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
]

const Lesson = () => {
  return (
    <div className="bg-zinc-100 ">
      <div>
        {Content.map((item) => (
          <Link to="/">
            <div className="">
              <table className="box-content">
                <tbody className="">
                  <tr>
                    <td className="text-teal-400 font-bold">{item.id}</td>
                    <td className="text-black">{item.lessonName}</td>
                    {/* <td>{item.videoUrl}</td> */}
                    <td className="text-black">{item.duration}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Lesson
