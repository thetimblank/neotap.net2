'use client';

import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import Course from './Course';
import './page.css';

const data: Course[] = [
	{
		name: 'AP United States History',
		period: 1,
		id: 1,
		todo: [
			{
				name: 'final project',
				priority: 1,
			},
		],
	},
	{
		name: 'Prob Stats Hon',
		period: 2,
		id: 2,
		todo: [
			{
				name: 'hw',
			},
		],
	},
	{
		name: 'AP Computer Science A',
		period: 3,
		id: 3,
		todo: [
			{
				name: 'final project',
			},
		],
	},
	{
		name: 'AP Bio',
		period: 4,
		id: 4,
		todo: [],
	},
	{
		name: 'AP Lunch',
		period: 5,
		id: 5,
		todo: [],
	},
];

const Page: React.FC = () => {
	const [courses, setCourses] = useState<Course[]>(data);

	const updateCourses = (input: Course[]) => {
		const updated: Course[] = input;

		for (let i = 0; i < input.length; i++) {
			updated[i].period = i + 1;
		}

		setCourses(updated);
	};

	return (
		<div className='full courses flex-col flex-gap'>
			<h2>Courses</h2>
			{courses.length < 1 ? (
				<div className='full center'>
					<div className='flex-align flex-col flex-gap'>
						<p>We didn&apos;t find any courses, would you like to add one?</p>
						<button className='btn'>Add</button>
					</div>
				</div>
			) : (
				<Reorder.Group values={courses} onReorder={updateCourses} className='actual'>
					{courses.map((course: Course) => {
						return (
							<Reorder.Item value={course} key={course.id}>
								<Course data={course} />
							</Reorder.Item>
						);
					})}
				</Reorder.Group>
			)}
		</div>
	);
};

export default Page;
