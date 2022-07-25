import * as THREE from 'three'
import { Suspense, useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls, useGLTF, BakeShadows, ContactShadows,useAnimations, Reflector, CameraShake } from "@react-three/drei";
import { DoubleSide } from 'three'
import { FPSControls } from 'react-three-fpscontrols';
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";



import CircleSub from  './components/circleSub'
import Land2 from  './components/land2'
import Robot from './components/robot'
import Pyramid from './components/pyramid'
import Pngtest1 from './components/pngtest1'



function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
  })
  return <group ref={ref}>{children}</group>
}



export default function App() {
  return (
    
    <div id = "body">
      

      <div className ="title">
        <p id ="title1"> Kylast </p>
        <p id ="title2"> .com </p>
      </div>

      <div>
        <input className="menu-btn" id="active" type="checkbox"  ></input>
            
            
          <div className="wrapper" id ="popupMenu">
            
            <div className = "subPage" id ="page0">
              
             
                
                  
                  <Canvas dpr={[1, 3]} camera={{ position: [3, 0, 3] }} >
                  <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
                    <ambientLight intensity={0.2} />
                    <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
                        
                          
                        
                    <Suspense fallback={null}>
                    <CircleSub />

                    </Suspense>
            
                  </Canvas>
                  
            
                 
             
         
            </div>

            <div className = "subPage" id ="page1">
              
              <div className='nftContainer'>
                <div className='container2'>
                  
                  <div className='leftContainer'>
                    <div className="nftPic">
                      
                    </div>
                    
                    <div className="nftDescriptionContainer">
                      <p className="nftInfo">
                          #001
                      </p>
                    </div>
                    <div className="nftDescriptionContainer">
                      <p className='nftDescription'>
                        "orem ielidftas,df asdfghd cupborum."
                      </p>
                    </div>
                  
                  </div>  
                </div>
              </div>
            </div>

            <div className = "subPage" id ="page2">
              
              <div className='nftContainer'>
                <div className='container2'>
                  
                  <div className='leftContainer'>
                    <div className="nftPic">
                      
                    </div>
                    
                    <div className="nftDescriptionContainer">
                      <p className="nftInfo">
                          #001
                      </p>
                    </div>
                    <div className="nftDescriptionContainer">
                      <p className='nftDescription'>
                        "orem ielidftas,df asdfghd cupborum."
                      </p>
                    </div>
                  
                  </div>  
                </div>
              </div>
            </div>

           

          

          </div>

        
      </div>

    
    
    
      <Canvas  dpr={[1, 1.5]} camera={{ position: [-0.5, 15, 80] }}>
      
          
              
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <ambientLight intensity={0.2} />
        <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
            
              
            
        <Suspense fallback={null}>
          
          <Rig>
            <Robot />
            <Land2 />
            
            
          
          </Rig>  
        

        </Suspense>
        <CameraShake yawFrequency={0.1} pitchFrequency={0.1} rollFrequency={0.1} />
      
      </Canvas>
    
    </div>
  )
}
