import React from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'

const About = () => {
  return (
    <><div className=" px-4 md:px-12 lg:px-64 py-16 lg:py-32 flex flex-col md:flex-row gap-8 lg:gap-32 bg-zinc-900">
    <div className="flex flex-col justify-between gap-8">
      <div className="flex flex-col flex-wrap gap-8">
        <h2 className="font-bold text-4xl text-teal-400">Meet Jacob Larzuri</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in
        </p>
      </div>
      <div className="text-2xl flex flex-row gap-10">
      <span className='hover:text-teal-400 hover:cursor-pointer'><AiFillFacebook /></span>
      <span className='hover:text-teal-400 hover:cursor-pointer'> <AiOutlineTwitter /></span>
      </div>
    </div>

    <img 
      className="w-64 h-64 md:w-80 md:h-80 rounded-box order-first"
      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwc21pbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    />
    
  </div>

  </>
    


   
  )
}

export default About
