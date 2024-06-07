import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import styles from './Section.module.css';
import Tooltip from '@/components/Tooltip';

type Dates = {
	start?: Date;
	end?: Date | 'Present';
};

export interface Item {
	name: string;
	description?: string;
	roles?: string[];
	link?: string;
	dates?: Dates;
	featured?: boolean;
	icon_path?: React.ReactNode;
}

interface P extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	data: Item[];
}

const ParsedDates = ({ start, end }: Dates) => {
	let parsed_start;
	let parsed_end;

	if (start) {
		parsed_start = `${start.toLocaleString('default', { month: 'long' })} ${start.getFullYear()}`;
	}

	if (end) {
		parsed_end =
			typeof end === 'string' ? 'Present' : `${end.toLocaleString('default', { month: 'long' })} ${end.getFullYear()}`;
	}

	if (start && !end) {
		return <p>Started {parsed_start}</p>;
	}

	if (!start && end) {
		return <p>Ended {parsed_end}</p>;
	}

	if (start && end) {
		return (
			<p>
				{parsed_start} until {parsed_end}
			</p>
		);
	}

	return null;
};

const Section: React.FC<P> = ({ title, data }) => {
	return (
		<>
			<h1 className='my-24 text-center'>{title}</h1>
			<section className={`${styles.section} w-full`}>
				{data.map((item, i) => {
					return (
						<div className={`flex flex-col ${styles.item} w-full`} key={i}>
							{item.icon_path && (
								<m.svg
									initial={{ opacity: 0, x: -150, rotate: 90, scaleX: -1 }}
									viewport={{ once: true }}
									whileInView={{ opacity: 0.25, x: 0, rotate: 10 }}
									transition={{ duration: 2, type: 'spring' }}
									className='absolute left-[-22.5%] top-[-50%] md:left-[-40%] md:top-0 size-2/3'
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 -960 960 960'
									width='24'>
									{item.icon_path}
								</m.svg>
							)}
							{item.featured && (
								<m.svg
									initial={{ opacity: 0, x: 150, rotate: 120 }}
									viewport={{ once: true }}
									whileInView={{ opacity: 1, x: 0, rotate: 10 }}
									transition={{ duration: 2, type: 'spring' }}
									className='absolute right-0 top-[-5px] size-12 md:right-[-40%] md:top-1/4 md:size-2/3 fill-yellow-600'
									xmlns='http://www.w3.org/2000/svg'
									height='24'
									viewBox='0 -960 960 960'
									width='24'>
									<path d='M480-231 311-129q-18 11-37 9.5T241-132q-14-11-21.5-28t-2.5-37l45-192-150-130q-16-14-20-32t1-35q5-17 19.5-29t35.5-14l197-17 77-182q8-20 24-29t34-9q18 0 34 9t24 29l77 182 197 17q21 2 35.5 14t19.5 29q5 17 1 35t-20 32L698-389l45 192q5 20-2.5 37T719-132q-14 11-33 12.5t-37-9.5L480-231Z' />
								</m.svg>
							)}
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
								{item.dates && (item.dates.start || item.dates.end) && (
									<Tooltip content={<ParsedDates start={item.dates.start} end={item.dates.end} />}>
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
