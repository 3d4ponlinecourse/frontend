import React from 'react'
import BannerCourse from '../components/course/BannerCourse'

import Overview from '../components/course/Overview'

const ContentCourse = () => {
  return (
    <div>
      <div>
        <BannerCourse />
      </div>
      {/* <div>
        <Lesson />
      </div> */}
      <div>
        <Overview />
      </div>
    </div>
  )
}

export default ContentCourse
