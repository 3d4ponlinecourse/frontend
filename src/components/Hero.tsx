import { Loader, PerspectiveCamera, PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'

const Model = (props: any): any => {
  const { scene } = useGLTF('/Benz.glb')
  return <primitive object={scene} {...props} />
}

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 lg:py-16 justify-center gap-4 md:gap-8 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col flex-wrap  lg:w-1/2 items-start gap-24 lg:gap-48">
        <div className="text-6xl lg:text-7xl font-bold flex flex-col gap-4">
          <h1>Begin Your</h1>
          <h1 className="text-teal-400">3D Modeling</h1>
          <h1 className="text-teal-400">Course</h1>
          <h1>For Free.</h1>
        </div>

        <div>
          <button className="button-3d4p">Enroll this course</button>
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

      <div className="bg-zinc-700 w-1/2 lg:w-2/3  min-h-full hidden md:block overflow-hidden rounded-box border-2 border-teal-400">
        <Canvas dpr={[1, 2]} shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault zoom={1.8} position={[0, 1, 5]} fov={50} />
            {/* <color attach="background" args={['#2d2d30']} /> */}
            <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
              <Stage preset={'soft'} environment={'city'} shadows>
                <Model scale={1} />
              </Stage>
            </PresentationControls>
          </Suspense>
        </Canvas>
      </div>
      <Loader />
    </div>
  )
}

export default Hero
