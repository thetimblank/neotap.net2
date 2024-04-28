import { Canvas, useThree, useFrame } from '@react-three/fiber';
import React, { useRef, useLayoutEffect } from 'react';
import { useTime } from 'framer-motion';
import { degreesToRadians, progress, mix } from 'popmotion';
import { motion } from 'framer-motion';

const Planet = ({ color }: { color: string }) => (
   <mesh>
      <dodecahedronGeometry args={[1, 0]} />
      <meshBasicMaterial wireframe color={color} />
   </mesh>
);

const Asteroid = ({ p, color }: { p: number; color: string }) => {
   const ref = useRef<THREE.Mesh>(null);

   useLayoutEffect(() => {
      const distance = mix(2, 3.5, Math.random());
      const xAngle = degreesToRadians(360) * p;
      const yAngle = mix(degreesToRadians(75), degreesToRadians(100), Math.random());

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
   const color = theme === 'dark' ? '#444' : '#eee';
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
      stars.push(<Asteroid key={i} p={progress(0, starAmount, i)} color={color} />);
   }

   return (
      <>
         <Planet color={color} />
         {stars}
      </>
   );
}

interface Props {
   theme: Themes;
}

const Render: React.FC<Props> = ({ theme }) => {
   return (
      <motion.div
         className='render'
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ ease: 'anticipate', duration: 1 }}>
         <Canvas gl={{ antialias: false }}>
            <Scene theme={theme} />
         </Canvas>
      </motion.div>
   );
};

export default Render;
