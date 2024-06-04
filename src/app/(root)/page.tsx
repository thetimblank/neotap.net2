'use client';

import React, { useContext } from 'react';
import Scrollable from '@/components/Scrollable';
import { m } from 'framer-motion';
import { ThemeContext } from '@/providers/Theme';
import Section from './Section';
import Render from './Render';
import Footer from '@/components/footer/Footer';
import Loading from '@/components/state/Loading';

const Page: React.FC = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Scrollable>
			<m.div
				className='center'
				style={{ backgroundColor: 'var(--bg-h1)' }}
				transition={{ type: 'spring', delay: 0.1, duration: 0.3 }}
				initial={{ opacity: 1, y: 0 }}
				animate={{ opacity: 0, y: '-100%' }}>
				<Loading />
			</m.div>
			<Render theme={theme} />
			<div className='w-full gap-10 my-[10%] flex-col items-center center-text'>
				<m.h1
					className='text-9xl leading-6'
					initial={{ y: 0, scale: 4.5 }}
					transition={{ type: 'spring', duration: 1 }}
					animate={{ y: 0, scale: 1 }}>
					Hey, I&apos;m Tim.
				</m.h1>
			</div>
			<div className='mx-[10%] w-[80%] leading-6'>
				<m.h3
					className='max-w-[50%] leading-5 text-4xl mb-[10vh]'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
					I come from Germany and have found a passion for coding and developing small projects.
				</m.h3>
				<m.h3
					className='max-w-[50%] leading-5 text-4xl mb-[10vh]'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
					I&apos;d love to expand my experience to much larger projects. If you think you could help, let me know at my{' '}
					<a
						href='mailto:neo@neotap.net'
						className='inline-flex items-center gap-3 transition px-4 rounded-2xl fill-[var(--link)] text-[var(--link)] hover:bg-[var(--bg-h2)]'>
						<svg xmlns='http://www.w3.org/2000/svg' height='35' viewBox='0 -960 960 960' width='35'>
							<path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z' />
						</svg>
						email
					</a>
				</m.h3>
				<Section
					title="Where I've been"
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
							link: 'https://bloodline.neotap.net',
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
			</div>
			<Footer />
		</Scrollable>
	);
};

export default Page;
