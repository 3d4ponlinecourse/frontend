import { PerspectiveCamera, PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'


const Model =(props:any):any=>{
    const {scene}=useGLTF("/Benz.glb")
    return <primitive object={scene}{...props}/>
}

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row py-12 lg:py-12 justify-center gap-4 lg:gap-20 px-4 lg:px-20">
      <div className="flex flex-col flex-wrap  lg:w-1/2 items-start gap-24 lg:gap-48">
        <div className="text-6xl lg:text-8xl font-bold flex flex-col gap-4">
          <h1>Begin Your</h1>
          <h1 className='text-teal-400'>3D Modeling</h1>
          <h1 className='text-teal-400'>Course</h1>
          <h1>For Free.</h1>
        </div>

        <div>
          <button className="button-3d4p">Enroll this course</button>
          <div className="text-2xl flex flex-row justify-between p-8">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <BsDiscord />
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 w-full lg:w-2/3 md:min-h-96 lg:min-h-full order-first lg:order-last hidden md:block">
        <Canvas dpr={[1,2]} shadows>
            <PerspectiveCamera makeDefault  zoom={1.8} position={[0,1,5]}  fov={50}/>
        <color attach="background" args={["#2d2d30"]}/>
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1,Math.PI/4]}>
            <Stage preset={'soft'} environment={'city'} shadows>
                {/* <mesh rotation={[angleToRaidian(-90),0,0]}>
                    <planeGeometry args={[1,1]}/>
                    <meshStandardMaterial/>
                </mesh> */}
            <Model scale={1}/>
            </Stage>
        </PresentationControls>
        </Canvas>
      </div>
    </div>
  )
}

export default Hero
