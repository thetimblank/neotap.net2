'use client';

import React, { useState } from 'react';
import Scrollable from '@/components/Scrollable';
import Section from './Section';
import Footer from '@/components/footer/Footer';
import Header from './Header';
import Background from './Background';
import Pinned, { Sizes } from './Pinned';

const Page: React.FC = () => {
	const [backgroundTransparent, setBackgroundTransparent] = useState(false);

	return (
		<Scrollable>
			<div className='center'>
				<Background />
				<Header />
				<div
					className={`${
						backgroundTransparent ? 'bg-transparent' : 'bg-[var(--bg-low)]'
					} w-full px-[5vw] sm:px-[15vw] transition-colors`}>
					<Pinned
						setBackground={setBackgroundTransparent}
						title="Where I've been"
						data={[
							{
								name: 'Vase Oasis',
								size: Sizes.large,
								icon_paths: [
									<path d='M455-48q-35 0-69.5-6.5T318-74q3-130 62-244.5T534-522q-116 60-197 161.5T214-134q-5-5-10.5-9.5T193-153q-51-51-79-116.5T86-405q0-74 29.5-140T197-663q72-72 175.5-103.5T639-795q41 1 76 16.5t62 42.5q27 27 42.5 62.5T837-597q3 161-28 264.5T707-157q-52 53-117 81T455-48Z' />,
									<path d='M419-57Q278-87 178.5-187T54-455q-2-15 2-28t13-22q9-9 22-13.5t28-2.5q183 25 264 124t101 279q2 15-3 28t-14 21q-9 8-21.5 11.5T419-57Zm62-422q-31-38-82.5-71.5T303-602q11-62 49-139t83-142q9-13 20.5-19t24.5-6q13 0 25 5.5t20 18.5q48 68 86 149t46 133q-48 19-98.5 53.5T481-479ZM606-76q-2-72-15-154t-39-136q45-64 118-103t171-52q15-2 28 2.5t22 13.5q9 9 13 22t2 28q-21 145-98 239.5T606-76Z' />,
								],
								roles: ['Lead Web & App Developer', 'Engineer'],
								link: 'https://vaseoasis.com',
								startDate: new Date(2024, 1),
								endDate: 'Present',
							},
							{
								name: 'Costellar',
								roles: ['Personal Project'],
								link: 'https://costellar.neotap.net',
								startDate: new Date(2024, 5),
								endDate: 'Present',
								size: Sizes.medium,
								icon_paths: [
									<path d='M480-231 311-129q-18 11-37 9.5T241-132q-14-11-21.5-28t-2.5-37l45-192-150-130q-16-14-20-32t1-35q5-17 19.5-29t35.5-14l197-17 77-182q8-20 24-29t34-9q18 0 34 9t24 29l77 182 197 17q21 2 35.5 14t19.5 29q5 17 1 35t-20 32L698-389l45 192q5 20-2.5 37T719-132q-14 11-33 12.5t-37-9.5L480-231Z' />,
									<path d='M224-491q32-78 75.5-149T397-776l-57-11q-31-6-61 3t-53 32L109-635q-23 23-17 55.5t36 46.5l96 42Zm646-432q-109 2-208 44T486-760q-54 54-95 115.5T318-515q-9 20-7.5 41.5T327-437l123 123q15 15 36.5 16.5T528-306q67-33 129-73.5T773-474q77-77 119-175.5T936-857q0-13-5.5-25T916-903q-9-9-21-14.5t-25-5.5ZM614-602q-21-21-21-51t21-51q21-21 51.5-21t51.5 21q21 21 21 51t-21 51q-21 21-51.5 21T614-602ZM504-212l41 97q14 31 46.5 37T648-96l117-117q23-23 32-53t3-61l-11-57q-65 54-136 97t-149 75ZM119-316q45-45 107-45t107 45q45 45 45 107t-45 107q-58 58-139.5 70T30-13q7-82 19-163.5T119-316Z' />,
								],
							},
						]}
					/>
					<Section
						title="What I've learned"
						data={[
							{
								name: 'Languages',
								roles: ['English', 'German', 'Basic Spanish'],
							},
							{
								name: 'Actual Languages',
								roles: ['Typescript', 'Python', 'Java', 'Basic Rust', 'Basic C++'],
							},
						]}
					/>
					<Section
						title="Other things I've done"
						data={[
							{
								name: 'Nodur',
								link: 'https://nodur.vercel.app',
								roles: ['Web Developer', 'Full Stack'],
								startDate: new Date(2024, 5, 14),
								endDate: 'Present',
							},
							{
								name: 'Bloodline Interactive',
								roles: ['Lead Web Developer', 'Engine Developer'],
								startDate: new Date(2023, 7),
								endDate: 'Present',
							},
							{
								name: "how's your day",
								roles: ['Personal Project'],
								link: 'https://howsyourday.neotap.net',
								startDate: new Date(2023, 7),
							},
						]}
					/>
				</div>

				<Footer />
			</div>
		</Scrollable>
	);
};

export default Page;
