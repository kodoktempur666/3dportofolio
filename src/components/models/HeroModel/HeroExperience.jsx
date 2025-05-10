import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import HeroLights from './HeroLights'
import Particles from './Particle'
import { Monitor } from './Monitor'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 25 }}>
        <HeroLights />
        <Particles count={100} />
        <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2}
        />
        <group scale={isMobile ? 0.5 : 1} position={[0, -2, 0]} rotation={[0, -Math.PI / 4, 0]}>
            <Monitor />
        </group>

    </Canvas>
  )
}

export default HeroExperience