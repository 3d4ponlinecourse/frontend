import { PerspectiveCamera, PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import angleToRaidian from '../utility/angleToRaidian'

const Model =(props:any):any=>{
    const {scene}=useGLTF("/Benz.glb")
    return <primitive object={scene}{...props}/>
}

const Hero = () => {
  return (
    <div className="flex flex-row py-12 justify-center gap-20 px-20">
      <div className="flex flex-col flex-wrap w-1/2 items-start gap-64">
        <h1 className=" text-7xl font-bold  leading-tight ">
          Begin Your <span className="text-teal-400">3D Modeling Course</span> For Free.
        </h1>
        <div>
          <button className="button-3d4p">Enroll this course</button>
          <div className="text-2xl flex flex-row justify-between p-8">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <BsDiscord />
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 w-2/3 min-h-full">
        <Canvas dpr={[1,2]} shadows>
            <PerspectiveCamera makeDefault  zoom={1.7} position={[0,1,5]} rotat fov={50}/>
        <color attach="background" args={["#2d2d30"]}/>
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1,Math.PI/4]}>
            <Stage preset={'soft'} shadows>
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
