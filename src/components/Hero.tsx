import { PerspectiveCamera, PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { Button } from '@material-tailwind/react'
import angleToRaidian from '../utility/angleToRaidian'
const Model = (props: any): any => {
  const { scene } = useGLTF('/Benz.glb')
  return <primitive object={scene} {...props} />
}

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 lg:py-4 justify-center gap-4 md:gap-8 px-4 md:px-12 ">
      <div className="flex flex-col flex-wrap  lg:w-1/2 items-start gap-24 lg:gap-16">
        <div className="text-8xl font-bold flex flex-col gap-4">
          <h1 className="relative ">Begin Your</h1>
          <h1 className=" text-teal-400">3D Modeling</h1>
          <h1 className="text-teal-400">Course</h1>
          <h1 className="">For Free.</h1>
        </div>

        <div>
          <Button color="teal" size="lg" className="button-3d4p">
            Enroll this course
          </Button>
          <div className="text-2xl flex flex-row justify-between p-8">
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <AiFillFacebook />
            </span>
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <AiOutlineTwitter />
            </span>
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <BsDiscord />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 min-h-full h-96 hidden lg:block overflow-hidden absolute w-1/2 right-32 top-3 ">
        <Canvas dpr={[1, 2]} shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault zoom={1.4} position={[0, 0.5, 5]} fov={80} />
            {/* <color attach="background" args={['#2d2d30']} /> */}
            <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
              <Stage preset={'soft'} environment={'city'} shadows>
                <Model scale={1} rotation={[0, angleToRaidian(30), 0]} />
              </Stage>
            </PresentationControls>
          </Suspense>
        </Canvas>
      </div>
      {/* <Loader /> */}
    </div>
  )
}

export default Hero
