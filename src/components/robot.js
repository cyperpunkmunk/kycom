
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/robot.glb");
  const { actions } = useAnimations(animations, group);
  
  useFrame(() => { 
    actions.robot.play(); 
  }) 
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[-.5, -3, .2]}
        scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/robot.glb");
