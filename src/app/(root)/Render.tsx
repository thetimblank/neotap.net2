import { Canvas, useThree, useFrame } from '@react-three/fiber';
import React, { useRef, useLayoutEffect } from 'react';
import { useTime } from 'framer-motion';
import { degreesToRadians, progress, mix } from 'popmotion';
import { m } from 'framer-motion';

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

const Scene = ({ theme }: { theme: Theme.Themes }) => {
	const color = theme.value === 'dark' ? '#444' : '#eee';
	const asteroidAmount = 50;

	const gl = useThree((state) => state.gl);
	const time = useTime();

	useFrame(({ camera }) => {
		camera.position.setFromSphericalCoords(1.75, 1, time.get() * 0.0001);
		camera.updateProjectionMatrix();
		camera.lookAt(0, 0, 0);
	});

	// useLayoutEffect(() => gl.setPixelRatio(0.2));

	const asteroids = [];

	for (let i = 0; i < asteroidAmount; i++) {
		asteroids.push(<Asteroid key={i} p={progress(0, asteroidAmount, i)} color={color} />);
	}

	return (
		<>
			<Planet color={color} />
			{asteroids}
		</>
	);
};

interface Props {
	theme: Theme.Themes;
}

const Render: React.FC<Props> = ({ theme, ...rest }) => {
	return (
		<m.div
			className='absolute top-0 left-0 size-full -z-10'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'anticipate', duration: 1 }}>
			<Canvas gl={{ antialias: false }}>
				<Scene theme={theme} />
			</Canvas>
		</m.div>
	);
};

export default Render;
