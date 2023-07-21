import React from 'react'
import { BiNews } from 'react-icons/bi'

const News = () => {
  return (
    <div className="px-4 md:px-12 lg:px-64 py-8 lg:py-32">
        <div className='flex flex row justify-between items-end '> 
        <div className='flex flex-row items-center gap-2'>
          <span className='text-teal-400'><BiNews size={36}/></span>
          <h2 className="font-bold text-3xl md:text-4xl">News & Updates<span className='text-teal-400'>.</span></h2> </div>
  
            <p className='font-bold hidden lg:block hover:text-teal-400 hover:cursor-pointer'>SEE ALL</p>
        </div>
     
    </div>
  )
}

export default News
