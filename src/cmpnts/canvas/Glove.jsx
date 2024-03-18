import {Suspense, useEffect, useState} from 'react'
import {Canvas, events} from "@react-three/fiber"
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
const Glove = ({ isMobile }) => {
  const glove =useGLTF('./boxing_glove/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor='black'/>
      <directionalLight position={[0 , 0, 0.05]}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
        <pointLight intensity={7}/>
      <primitive
        object={glove.scene} 
        scale ={isMobile? 30 : 35} 
        position={isMobile ? [0,2.5,-1] : [1,3, -1.5]}
        rotation={[-0.01,-0.2,-0.06]}
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
    <Canvas frameloop='demand'
      
      shadows 
      camera={{position:[20,20,20],fov:25}}
      gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls 
            enableDamping={false}
            autoRotate
            autoRotateSpeed={13.3}
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