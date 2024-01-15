import { Canvas, useThree, useFrame } from '@react-three/fiber';
import React, { useRef, useLayoutEffect } from 'react';
import { useTime } from 'framer-motion';
import { degreesToRadians, progress, mix } from 'popmotion';

const Icosahedron = ({ color }: { color: string }) => (
   <mesh>
      <dodecahedronGeometry args={[1, 0]} />
      <meshBasicMaterial wireframe color={color} />
   </mesh>
);

const Star = ({ p, color }: { p: number; color: string }) => {
   const ref = useRef<any>(null);

   useLayoutEffect(() => {
      const distance = mix(2, 3.5, Math.random());
      const yAngle = mix(degreesToRadians(75), degreesToRadians(100), Math.random());
      const xAngle = degreesToRadians(360) * p;

      if (!ref.current) {
         return;
      }

      ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
   });

   return (
      <mesh ref={ref}>
         <sphereGeometry args={[0.1, 8, 8]} />
         <meshBasicMaterial color={color} />
      </mesh>
   );
};

function Scene({ theme }: { theme: Themes }) {
   const color = theme === 'dark' ? '#555' : '#eee';
   const starAmount = 50;

   const gl = useThree((state) => state.gl);
   const time = useTime();

   useFrame(({ camera }) => {
      camera.position.setFromSphericalCoords(2, 1, time.get() * 0.0001);
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
   });

   useLayoutEffect(() => gl.setPixelRatio(0.2));

   const stars = [];
   for (let i = 0; i < starAmount; i++) {
      stars.push(<Star key={i} p={progress(0, starAmount, i)} color={color} />);
   }

   return (
      <>
         <rectAreaLight position={[0, 0, 0]} intensity={5} color='#fff' />
         <Icosahedron color={color} />
         {stars}
      </>
   );
}

interface Props {
   theme: Themes;
}

const Render: React.FC<Props> = ({ theme }) => {
   return (
      <div className='render'>
         <Canvas gl={{ antialias: false }}>
            <Scene theme={theme} />
         </Canvas>
      </div>
   );
};

export default Render;
