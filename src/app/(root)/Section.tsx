import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import styles from './Section.module.css';
import Tooltip from '@/components/Tooltip';

export interface Item {
	name: string;
	description?: string;
	roles?: string[];
	link?: string;
	startDate?: Date;
	endDate?: Date | 'Present';
}

interface P extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	data: Item[];
}

const Dates = ({ startDate, endDate }: { startDate?: Date; endDate?: Date | 'Present' }) => {
	let end = typeof endDate === 'string' ? 'Present' : endDate?.getFullYear();

	if (startDate && !endDate) {
		return <p>start. {startDate.getFullYear()}</p>;
	}

	if (!startDate && endDate) {
		return <p>end. {end}</p>;
	}

	if (startDate && endDate) {
		return (
			<p>
				{startDate.getFullYear()}
				{' - '}
				{end}
			</p>
		);
	}

	return null;
};

const Section: React.FC<P> = ({ title, data }) => {
	return (
		<>
			<h1 className='my-24 text-center'>{title}</h1>
			<section className={`${styles.section} w-full md:w-3/4`}>
				{data.map((item, i) => {
					return (
						<div className={`flex gap-5 flex-col ${styles.item}`} key={i}>
							<div className={`flex gap-5 items-center ${styles.title}`}>
								{item.link ? (
									<>
										<Link href={item.link} target='_blank' className='link flex items-center' style={{ gap: 20 }}>
											<h3 className='leading-10'>{item.name}</h3>
											<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
												<path d='M212-86q-53 0-89.5-36.5T86-212v-536q0-53 36.5-89.5T212-874h205q26 0 44.5 18.5T480-811q0 26-18.5 44.5T417-748H212v536h536v-205q0-26 18.5-44.5T811-480q26 0 44.5 18.5T874-417v205q0 53-36.5 89.5T748-86H212Zm536-575L462-375q-18 18-43 17.5T376-376q-18-18-18-43.5t18-43.5l285-285h-38q-26 0-44.5-18.5T560-811q0-26 18.5-44.5T623-874h188q26 0 44.5 18.5T874-811v188q0 26-18.5 44.5T811-560q-26 0-44.5-18.5T748-623v-38Z' />
											</svg>
										</Link>
									</>
								) : (
									<h3 className='leading-10'>{item.name}</h3>
								)}
								{item.startDate && item.endDate && (
									<Tooltip content={<Dates startDate={item.startDate} endDate={item.endDate} />}>
										<svg
											tabIndex={0}
											className={item.link ? 'link' : ''}
											xmlns='http://www.w3.org/2000/svg'
											height='24'
											viewBox='0 -960 960 960'
											width='24'>
											<path d='M535-504v-116q0-23.38-15.81-39.19Q503.38-675 480-675q-23.37 0-39.19 15.81Q425-643.38 425-620v136q0 13 4.5 24.07T443-440l116 116q16 16 38 16t39-16q17-16 17-39t-17-40L535-504ZM480-46q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z' />
										</svg>
									</Tooltip>
								)}
							</div>

							<div className={styles.roles}>
								{item.description && (
									<m.h2
										initial={{ opacity: 0, y: 50 }}
										transition={{ duration: 1, ease: 'anticipate' }}
										viewport={{ once: true }}
										whileInView={{ opacity: 1, y: 0 }}>
										{item.description}
									</m.h2>
								)}
								{item.roles && (
									<div style={{ gap: '2vh 5vw' }} className='flex items-center flex-wrap'>
										{item.roles.map((role, j) => {
											return (
												<m.h2
													className={styles.role}
													key={j}
													initial={{ opacity: 0, y: 50 }}
													viewport={{ once: true }}
													transition={{ duration: 1, ease: 'anticipate', delay: j * 0.2 + 0.2 }}
													whileInView={{ opacity: 1, y: 0 }}>
													{role}
												</m.h2>
											);
										})}
									</div>
								)}
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Section;
