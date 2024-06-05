import React from 'react';
import type { Item } from './Section';
import { useViewportSize } from '@mantine/hooks';

export enum Sizes {
	small = 'w-[40vw]',
	medium = 'w-[50vw]',
	large = 'w-[60vw]',
}

interface PinnedItem extends Item {
	color: string;
	size: Sizes;
	icons: [React.ReactNode, React.ReactNode];
}

interface P extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	data: PinnedItem[];
}

const Pinned: React.FC<P> = ({ title, data }) => {
	const { width } = useViewportSize();

	return (
		<>
			<h1 className='my-24 text-center'>{title}</h1>
			{data.map((item, i) => {
				return (
					<div key={i} className={`h-[75vh] ${item.size} flex flex-col bg-[${item.color}] rounded-2xl p-8`}>
						<h2 className='text-center'>{item.name}</h2>
					</div>
				);
			})}
			<div></div>
		</>
	);
};

export default Pinned;
