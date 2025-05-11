import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[-1, 3, 5]}
      angle={0.45}
      penumbra={1}
      intensity={100}
      color="white"
    />

    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#49A7C9FF" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#1A576EFF" />
  </>
);

export default HeroLights;