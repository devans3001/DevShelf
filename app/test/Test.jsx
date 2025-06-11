"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function Chip() {
  const chipRef = useRef();

  return (
    <motion.mesh
      ref={chipRef}
      initial={{ scale: [0, 0, 0] }}
      animate={{ scale: [1, 1, 1] }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      position={[0, 0, 0]}
    >
      {" "}
      <boxGeometry args={[4, 1, 2]} />{" "}
      <meshStandardMaterial color={"#1f2937"} metalness={0.6} roughness={0.3} />{" "}
      <Html center>
        {" "}
        <div className="text-white dark:text-zinc-200 text-lg font-bold">
          Powered By
        </div>{" "}
      </Html>{" "}
    </motion.mesh>
  );
}

function Pins() {
  const positions = [
    [-2.5, 0, 1.2],
    [2.5, 0, 1.2],
    [-2.5, 0, -1.2],
    [2.5, 0, -1.2],
    [0, 0, 1.2],
    [0, 0, -1.2],
    [-1.2, 0, 1.2],
    [1.2, 0, 1.2],
    [-1.2, 0, -1.2],
    [1.2, 0, -1.2],
  ];

  return (
    <>
      {" "}
      {positions.map((pos, i) => (
        <motion.mesh
          key={i}
          position={pos}
          initial={{ scale: [0, 0, 0] }}
          animate={{ scale: [1, 1, 1] }}
          transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
        >
          {" "}
          <boxGeometry args={[0.2, 0.4, 0.2]} />{" "}
          <meshStandardMaterial
            color={"#dd0"}
            metalness={1}
            roughness={0.1}
          />{" "}
        </motion.mesh>
      ))}{" "}
    </>
  );
}

function GlowingLines() {
  const material = new THREE.MeshBasicMaterial({ color: "#3b82f6" });
  const positions = [
    [
      [-2.5, 0, 1.2],
      [-4, 0, 2],
    ],
    [
      [2.5, 0, 1.2],
      [4, 0, 2],
    ],
    [
      [-2.5, 0, -1.2],
      [-4, 0, -2],
    ],
    [
      [2.5, 0, -1.2],
      [4, 0, -2],
    ],
  ];

  return (
    <>
      {" "}
      {positions.map(([start, end], index) => {
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={index} geometry={geometry}>
            {" "}
            <lineBasicMaterial
              attach="material"
              color="#3b82f6"
              linewidth={3}
            />{" "}
          </line>
        );
      })}{" "}
    </>
  );
}

function AutoRotate() {
  useFrame((state) => {
    state.scene.rotation.y += 0.002;
  });
  return null;
}

export default function PoweredBy3DChip() {
  return (
    <div className="h-screen w-full bg-white dark:bg-black">
      {" "}
      <Canvas camera={{ position: [0, 5, 8], fov: 35 }}>
        {" "}
        <ambientLight intensity={0.7} />{" "}
        <directionalLight position={[0, 5, 5]} intensity={1.5} /> <AutoRotate />{" "}
        <Chip /> <Pins /> <GlowingLines />{" "}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />{" "}
      </Canvas>{" "}
    </div>
  );
}
