'use client';

import React from 'react';
import Scrollable from '@/components/Scrollable';
import Section from './Section';
import Footer from '@/components/footer/Footer';
import Header from './Header';
import Background from './Background';
import Link from 'next/link';

const Page: React.FC = () => {
	return (
		<Scrollable>
			<div className='center'>
				<Background />
				<Header />
				<div className='outline-4 outline bg-[var(--bg-normal)] w-full px-[5vw] sm:px-[15vw] transition-colors outline-[var(--button-color)] rounded-t-3xl'>
					<Section
						title="Where I've been"
						data={[
							{
								name: 'Vase Oasis',
								icon_path: (
									<path d='M455-48q-35 0-69.5-6.5T318-74q3-130 62-244.5T534-522q-116 60-197 161.5T214-134q-5-5-10.5-9.5T193-153q-51-51-79-116.5T86-405q0-74 29.5-140T197-663q72-72 175.5-103.5T639-795q41 1 76 16.5t62 42.5q27 27 42.5 62.5T837-597q3 161-28 264.5T707-157q-52 53-117 81T455-48Z' />
								),
								roles: ['Lead Web & App Developer', 'Engineer'],
								link: 'https://vaseoasis.com',
								dates: {
									start: new Date(2024, 1),
									end: 'Present',
								},
								featured: true,
							},
							{
								name: 'Costellar',
								roles: ['Personal Project'],
								link: 'https://costellar.neotap.net',
								dates: {
									start: new Date(2024, 5),
									end: new Date(2024, 6),
								},
								icon_path: (
									<path d='M224-491q32-78 75.5-149T397-776l-57-11q-31-6-61 3t-53 32L109-635q-23 23-17 55.5t36 46.5l96 42Zm646-432q-109 2-208 44T486-760q-54 54-95 115.5T318-515q-9 20-7.5 41.5T327-437l123 123q15 15 36.5 16.5T528-306q67-33 129-73.5T773-474q77-77 119-175.5T936-857q0-13-5.5-25T916-903q-9-9-21-14.5t-25-5.5ZM614-602q-21-21-21-51t21-51q21-21 51.5-21t51.5 21q21 21 21 51t-21 51q-21 21-51.5 21T614-602ZM504-212l41 97q14 31 46.5 37T648-96l117-117q23-23 32-53t3-61l-11-57q-65 54-136 97t-149 75ZM119-316q45-45 107-45t107 45q45 45 45 107t-45 107q-58 58-139.5 70T30-13q7-82 19-163.5T119-316Z' />
								),
								featured: true,
							},
							{
								name: 'Nodur',
								link: 'https://nodur.vercel.app',
								roles: ['Web Developer', 'Full Stack'],
								dates: {
									start: new Date(2024, 5, 14),
									end: 'Present',
								},
							},
							{
								name: 'Bloodline Interactive',
								roles: ['Lead Web Developer', 'Engine Developer'],
								link: 'https://bloodline.neotap.net',
								dates: {
									start: new Date(2023, 7),
									end: 'Present',
								},
							},
							{
								name: "how's your day",
								roles: ['Personal Project'],
								link: 'https://howsyourday.neotap.net',
								dates: {
									start: new Date(2023, 7),
								},
							},
						]}
					/>
					<div className='flex w-full items-center flex-col'>
						<Link href='/clicker' className='label hover:underline hover:text-[var(--link)] transition-colors'>
							And maybe a super secret clicker...
						</Link>
					</div>
					<Section
						title='What I work with'
						data={[
							{
								name: 'Langauges',
								roles: ['Typescript', 'Python'],
							},
							{
								name: 'Frameworks',
								roles: ['React', 'Next.js'],
							},
							{
								name: 'Utilities',
								roles: ['VSC', 'Github', 'Coffee'],
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
								roles: ['Typescript', 'Python', 'Java', 'C++'],
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
