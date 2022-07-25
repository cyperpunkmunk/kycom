import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/circleSub.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        position={[0, -0.3, 0]}
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
      />
    </group>
  );
}

useGLTF.preload("/circleSub.glb");

