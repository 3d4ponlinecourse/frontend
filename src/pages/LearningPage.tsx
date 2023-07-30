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
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default LearningPage
