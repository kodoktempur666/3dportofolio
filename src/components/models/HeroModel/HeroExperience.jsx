import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particle";
import { Kop } from "./Kop-v1";


const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 15], fov: 25 }}>
      <HeroLights />
      <Particles count={isMobile ? 40 : isTablet ? 60 : 100} />

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <group
          scale={isMobile ? 0.5 : 1}
          position={[0, -2, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >

          <Kop />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
