import React from 'react'
import { AiOutlineHistory } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface IContent {
  id: number
  courseName: string
  imageUrl: string
  duration: string
  description: string
}

const Content: IContent[] = [
  {
    id: 1,
    courseName: 'Basics',
    imageUrl: 'https://threejs-journey.com/assets/images/program/chapter-01@2x.webp',
    duration: '9h 54mn',
    description:
      'Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.',
  },
]

const BannerCourse = () => {
  //Banner link from home page

  return (
    <div>
      <div>
        {Content.map((item) => (
          <div key={item.id} className="font-bold text-2xl">
            <h1>{item.id}</h1>
            <h2>{item.courseName}</h2>
            <div className="flex">
              <img src="https://threejs-journey.com/assets/images/program/chapter-01@2x.webp" alt="" />
            </div>
            <div className="flex text-base">
              <p>
                <AiOutlineHistory />
                {item.duration}{' '}
              </p>
            </div>
            <div className="text-base">
              <p>{item.description}</p>
              <Link to="/learningpage">
                <button className="border-2 border-teal-400 text-teal-400 px-6 py-2 rounded-full hover:bg-slate-200 hover:text-black">
                  Enroll this course
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerCourse
