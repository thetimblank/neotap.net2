import { loadBasic } from '@tsparticles/basic';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import React, { useCallback, useEffect, useState } from 'react';
import type { Engine } from '@tsparticles/engine';
import { m } from 'framer-motion';

const options = {
	pauseOnBlur: false,
	fpsLimit: 120,
	background: {
		color: 'var(--bg-h1)',
	},
	particles: {
		number: {
			value: 50,
		},
		color: {
			// value: ['#3998D0', '#2EB6AF', '#2f9e58', '#FEC73B', '#F45623', '#D62E32', '#9952CF'],
			value: ['#3998D0', '#74b8e8', '#9952CF', '#5234eb'],
		},
		shape: {
			type: 'circle',
		},
		opacity: {
			value: { min: 0.5, max: 0.75 },
		},
		size: {
			value: { min: 200, max: 400 },
		},
		move: {
			enable: true,
			angle: {
				value: 30,
				offset: 0,
			},
			speed: {
				min: 5,
				max: 10,
			},
			direction: MoveDirection.top,
			outModes: {
				default: OutMode.destroy,
				bottom: OutMode.none,
			},
		},
	},
	detectRetina: true,
	emitters: {
		position: {
			x: 50,
			y: 150,
		},
		rate: {
			delay: 0.2,
			quantity: 3,
		},
		size: {
			width: 50,
			height: 50,
		},
	},
};

const Background: React.FC = () => {
	const [init, setInit] = useState(false);

	const background = useCallback(async (engine: Engine) => {
		await loadBasic(engine, false);
		await loadEmittersPlugin(engine, false);

		await engine.refresh();
	}, []);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await background(engine).then(() => {
				setInit(true);
			});
		});
	}, []);

	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.9 }}
			transition={{ delay: 1, duration: 5, type: 'spring' }}
			className='size-full brightness-90 blur-3xl absolute'>
			{init && <Particles options={options} />}
		</m.div>
	);
};

export default Background;
