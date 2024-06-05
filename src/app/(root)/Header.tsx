import React from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import Image from 'next/image';

const Header: React.FC = () => {
	return (
		<div className='h-[100vh] px-[5vw] text-[var(--text-high)]'>
			<m.h1
				className='text-8xl sm:text-9xl my-20 text-center'
				initial={{ opacity: 0, y: 0, scale: 4.5 }}
				transition={{ type: 'spring', duration: 1 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}>
				Hey, I&apos;m Tim.
			</m.h1>
			<div className='w-full md:w-3/4 sm:mx-10'>
				<m.h3
					className='xl:w-1/2 leading-tight sm:text-4xl mb-[10vh]'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
					I come from Germany and have found a passion for coding and developing small projects.
				</m.h3>
				<m.h3
					className='xl:w-1/2 leading-tight sm:text-4xl mb-[10vh]'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
					I&apos;d love to expand my experience to much larger projects. If you think you could help, let me know at my{' '}
					<Link href='mailto:neo@neotap.net' className='anchor'>
						<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
							<path d='M172-126q-53 0-89.5-36.5T46-252v-456q0-53 36.5-89.5T172-834h616q53 0 89.5 36.5T914-708v456q0 53-36.5 89.5T788-126H172Zm308-283q9 0 17.5-2.5T514-419l252-164q9-5 15.5-15.5T788-622q0-26-23.5-40.5T716-661L480-508 244-661q-24-15-48-2t-24 41q0 14 6.5 24t15.5 15l252 164q8 5 16.5 7.5T480-409Z' />
						</svg>
						<p>email</p>
					</Link>
				</m.h3>
			</div>
		</div>
	);
};

export default Header;
