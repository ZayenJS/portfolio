import { FC, Suspense, useRef } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import { TextureLoader } from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import skillsImage from '../../../../assets/images/skills.png';

extend({ OrbitControls });

export interface SkillsSphereProps {}

const SkillsSphere: FC<SkillsSphereProps> = () => (
  // TODO: add loader
  <Suspense fallback={<div></div>}>
    <Canvas style={{ width: '100%', height: '100%' }}>
      <Controls />
      <Sphere />
    </Canvas>
  </Suspense>
);

export default SkillsSphere;

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  // @ts-ignore
  useFrame(() => controls.current.update());
  return (
    //@ts-ignore
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom
      enableSpan={false}
      minDistance={2}
      maxDistance={3}
      rotateSpeed={0.4}
      zoomSpeed={0.2}
    />
  );
}

function Sphere() {
  const [skills] = useLoader(TextureLoader, [skillsImage]);

  return (
    <>
      <ambientLight intensity={1} />
      <mesh rotation={[0, 10, 0]} castShadow>
        <sphereGeometry attach="geometry" args={[1, 64, 64]} />
        <meshStandardMaterial map={skills} />
      </mesh>
    </>
  );
}
