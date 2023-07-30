import React from 'react'
import ReactPlayer from 'react-player'
import Reviews from '../components/Reviews'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'
import Outcome from '../components/Outcome'
import useCourse from '../hooks/useCourse'
import { useParams } from 'react-router-dom'

const LearningPage = () => {
  const { id } = useParams()
  const { course } = useCourse(Number(id))

  // const Content = [
  //   {
  //     id: 1,
  //     courseName: 'Basics',
  //     videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //     imageUrl: 'https://threejs-journey.com/assets/images/program/chapter-01@2x.webp',
  //     duration: '9h 54mn',
  //     description:
  //       'Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.',
  //     comment: [],
  //     Lesson: [
  //       {
  //         id: 1,
  //         lessonName: 'Introduction',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '35mn',
  //       },
  //       {
  //         id: 2,
  //         lessonName: 'What is WebGL and why use Three.js',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '23mn',
  //       },
  //       {
  //         id: 3,
  //         lessonName: 'Basic scene',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '36mn',
  //       },
  //       {
  //         id: 4,
  //         lessonName: 'Local Server',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '41mn',
  //       },
  //       {
  //         id: 5,
  //         lessonName: 'Transform objects',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '46mn',
  //       },
  //       {
  //         id: 6,
  //         lessonName: 'Animations',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '30mn',
  //       },
  //       {
  //         id: 7,
  //         lessonName: 'Cameras',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '57mn',
  //       },
  //       {
  //         id: 8,
  //         lessonName: 'Fullscreen and resizing',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '30mn',
  //       },
  //       {
  //         id: 9,
  //         lessonName: 'Geometries',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '35mn',
  //       },
  //       {
  //         id: 10,
  //         lessonName: 'Debug UI',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '35mn',
  //       },
  //       {
  //         id: 11,
  //         lessonName: 'Textures',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '1h 14mn',
  //       },
  //       {
  //         id: 12,
  //         lessonName: 'Materials',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '1h 17mn',
  //       },
  //       {
  //         id: 13,
  //         lessonName: '3D Text',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '44mn',
  //       },
  //       {
  //         id: 14,
  //         lessonName: 'Go live',
  //         videoUrl: 'https://www.youtube.com/watch?v=nIoXOplUvAw&pp=ygUNZG9udXQgYmxlbmRlcg%3D%3D',
  //         duration: '24mn',
  //       },
  //     ],
  //   },
  // ]

  const [activeTab, setActiveTab] = React.useState('overview')
  const data = [
    {
      label: 'Overview',
      value: 'overview',
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'Reviews',
      value: 'reviews',
      desc: <Reviews />,
    },
  ]
  const [url, setURL] = React.useState('https://www.youtube.com/watch?v=v86OlB4f2QY')
  const [activeLesson, setActiveLesson] = React.useState('')
  return (
    <div className="flex flex-row gap-8 px-64 justify-between">
      <div className="flex flex-col gap-8 w-2/3">
        <ReactPlayer url={url} />

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className: 'bg-transparent border-b-2 border-teal-400 shadow-none rounded-none',
            }}
          >
            <Tab
              key="overview"
              value="overview"
              onClick={() => setActiveTab('overview')}
              className={activeTab === 'overview' ? 'text-teal-400' : ''}
            >
              Overview
            </Tab>
            <Tab
              key="outcome"
              value="outcome"
              onClick={() => setActiveTab('outcome')}
              className={activeTab === 'outcome' ? 'text-teal-400' : ''}
            >
              Outcome
            </Tab>
            <Tab
              key="reviews"
              value="reviews"
              onClick={() => setActiveTab('reviews')}
              className={activeTab === 'reviews' ? 'text-teal-400' : ''}
            >
              Reviews
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel key="overview" value="overview">
              {course?.description}
            </TabPanel>
            <TabPanel key="reviews" value="reviews">
              <Reviews />
            </TabPanel>
            <TabPanel key="outcome" value="outcome">
              <Outcome />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
      <div className="border p-10   rounded-xl overflow-auto max-h-screen">
        {course &&
          course.lesson.map((item) => (
            <>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between w-9">
                  <p className="font-bold text-xl text-teal-400">
                    {item.id}
                    {'.'}
                    {item.lessonName}
                  </p>
                  <div onClick={() => setURL(item.videoUrl)} key={item.id} className="border-b cursor-pointer">
                    link
                  </div>
                  <p className="text-gray-500">{item.duration}</p>
                </div>

                {/* <div className="flex flex-col gap-2">
                  <div
                    onClick={() => setActiveLesson(item.lessonName)}
                    className="flex flex-row justify-between hover:text-teal-400 cursor-pointer"
                  >
                    <p className={activeLesson === item.lessonName ? `text-teal-400 w-2/3` : `w-2/3`}>
                      {item.lessonName}
                    </p>
                    <p className="text-gray-500">{item.duration}</p>
                  </div>
                </div> */}
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default LearningPage
