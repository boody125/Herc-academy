import {Suspense, useEffect, useState} from 'react'
import {Canvas, events} from "@react-three/fiber"
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
const Glove = ({ isMobile }) => {
  const glove =useGLTF('./boxing_glove/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.45} groundColor='black'/>
      <directionalLight position={[0 , 0, 0.05]}/>
      {/* <spotLight 
        position={[2,2, 2]}
        angle={0}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={1024}
        /> */}
        <pointLight intensity={1}/>
      <primitive
        object={glove.scene} 
        scale ={isMobile? 26 : 32} 
        position={isMobile ? [0,3.3,-1] : [0,3,-1.5]}
        
        />
    </mesh>
  )
}

const GloveCanvas = ()=>{
  const [isMobile , setIsMobile] =useState(false)

  useEffect(()=>{
    const mediaQuery= window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches)
    console.log(isMobile)
    const handleMediaQueryChange= (event)=>{
      setIsMobile(event.matches)
      
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () =>{
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  })


  return(
    <Canvas 
      frameloop='demand'
      shadows 
      camera={{position:[20,20,20],fov:25}}
      dpr={[1, 2]}
      gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableDamping={false}
            autoRotate
            autoRotateSpeed={7.5}
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
          
          />
          <Glove isMobile={isMobile} />
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}
export default GloveCanvas