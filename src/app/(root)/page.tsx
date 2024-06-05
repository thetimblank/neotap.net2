'use client';

import React from 'react';
import Scrollable from '@/components/Scrollable';
import Section from './Section';
import Footer from '@/components/footer/Footer';
import Header from './Header';
import Background from './Background';
import Pinned, { Sizes } from './Pinned';

const Page: React.FC = () => {
	return (
		<Scrollable>
			<div className='center'>
				<Background />
				<Header />
				<div className='bg-[var(--bg-low)] w-full px-[5vw] sm:px-[15vw]'>
					<Pinned
						title="Where I've been"
						data={[
							{
								name: 'Vase Oasis',
								color: '#637667',
								size: Sizes.large,
								icons: [
									<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
										<path d='M455-48q-35 0-69.5-6.5T318-74q3-130 62-244.5T534-522q-116 60-197 161.5T214-134q-5-5-10.5-9.5T193-153q-51-51-79-116.5T86-405q0-74 29.5-140T197-663q72-72 175.5-103.5T639-795q41 1 76 16.5t62 42.5q27 27 42.5 62.5T837-597q3 161-28 264.5T707-157q-52 53-117 81T455-48Z' />
									</svg>,
									<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
										<path d='M419-57Q278-87 178.5-187T54-455q-2-15 2-28t13-22q9-9 22-13.5t28-2.5q183 25 264 124t101 279q2 15-3 28t-14 21q-9 8-21.5 11.5T419-57Zm62-422q-31-38-82.5-71.5T303-602q11-62 49-139t83-142q9-13 20.5-19t24.5-6q13 0 25 5.5t20 18.5q48 68 86 149t46 133q-48 19-98.5 53.5T481-479ZM606-76q-2-72-15-154t-39-136q45-64 118-103t171-52q15-2 28 2.5t22 13.5q9 9 13 22t2 28q-21 145-98 239.5T606-76Z' />
									</svg>,
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
								name: 'Vase Oasis',
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
							},
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
