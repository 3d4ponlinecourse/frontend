import React from 'react'

const LastedCourse = () => {
  const scrollProgress = () => {
    return {
      init() {
        window.addEventListener('scroll', () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
          this.percent = Math.round((winScroll / height) * 100)
        })
      },
      circumference: 30 * 2 * Math.PI,
      percent: 0,
    }
  }

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Lasted Courses</p>
        <p className="text-s font-medium">SEE ALL</p>
      </div>
      <div className="p-3 m-5 border border-black rounded-3xl">
        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="flex flex-col col-start-1 col-span-3 ... p-2 ">
            <h4 className="flex justify-start">Course</h4>
            <a href="" className="flex justify-start font-bold">
              3D Fundamental
            </a>
            <a href="" className="flex justify-start font-bold">
              01 - Introduction to 3D modelling
            </a>
          </div>
          <div x-data="scrollProgress" className="  flex justify-center items-center col-start-5">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="5"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-blue-600"
                strokeWidth="5"
                strokeDasharray="circumference"
                strokeDashoffset="circumference - percent / 100 * circumference"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
            </svg>
            <span className="absolute text-xl text-blue-700" x-text="`${percent}%`"></span>
          </div>
          <div className="flex items-center">
            <button className="border border-black p-2 rounded-3xl text-xs w-36 col-end-6">Resume Learning</button>
          </div>
        </div>
      </div>
      <div className="p-3 m-5 bg-slate-500 rounded-3xl">
        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="flex flex-col col-start-1 col-span-3 ... p-2 bg-orange-600">
            <h4 className="flex justify-start">Course</h4>
            <a href="" className="flex justify-start font-bold">
              3D Fundamental
            </a>
            <a href="" className="flex justify-start font-bold">
              01 - Introduction to 3D modelling
            </a>
          </div>
          <div className="flex items-center">
            <button className="border border-black p-2 bg-blue-400 rounded-3xl text-xs w-36 col-end-6">
              Resume Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastedCourse
