import React, { useEffect, useState } from 'react';
import type { Item } from './Section';
import { m } from 'framer-motion';

export enum Sizes {
	small = 'w-[50vw]',
	medium = 'w-[60vw]',
	large = 'w-[65vw]',
}

interface PinnedItem extends Item {
	size: Sizes;
	icon_paths: [React.ReactNode, React.ReactNode];
}

interface P extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	data: PinnedItem[];
	setBackground: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pinned: React.FC<P> = ({ title, data, setBackground }) => {
	const [hovering, setHovering] = useState(false);

	useEffect(() => {
		setBackground(hovering);
	}, [hovering]);

	return (
		<div className='mb-[25vh]'>
			<h1 className='my-24 text-center'>{title}</h1>
			<div className='flex flex-col gap-20 mb-40'>
				{data.map((item, i) => {
					return (
						<div
							key={i}
							className={`h-[30vh] sm:h-[40vh] ${item.size} min-w-56 ${
								i % 2 === 0 && 'self-end'
							} cursor-pointer hover:invert-0 hover:mix-blend-normal hover:grayscale`}>
							<m.svg
								initial={{ opacity: 0, x: -150, rotate: 90, scaleX: -1 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 0.25, x: 0, rotate: 10 }}
								transition={{ duration: 2, type: 'spring' }}
								className='absolute left-[-40%] top-0 size-2/3 z-10 pointer-events-none'
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 -960 960 960'
								width='24'>
								{item.icon_paths[1]}
							</m.svg>
							<m.svg
								initial={{ opacity: 0, x: 150, rotate: 120 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 0.25, x: 0, rotate: 10 }}
								transition={{ duration: 2, type: 'spring' }}
								className='absolute right-[-40%] bottom-0 size-2/3 z-10 pointer-events-none'
								xmlns='http://www.w3.org/2000/svg'
								height='24'
								viewBox='0 -960 960 960'
								width='24'>
								{item.icon_paths[0]}
							</m.svg>
							<m.div
								onHoverStart={() => setHovering(true)}
								onHoverEnd={() => setHovering(false)}
								style={hovering ? { position: 'absolute' } : {}}
								className={`bg-[var(--muted)] backdrop-blur size-full flex flex-col items-center rounded-2xl p-8 z-20`}>
								<h2 className='text-center mix-blend-exclusion'>{item.name}</h2>
								<p>{item.description}</p>
							</m.div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Pinned;
