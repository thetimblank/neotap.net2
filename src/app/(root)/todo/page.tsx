'use client';

import React, { useContext } from 'react';
import { Reorder } from 'framer-motion';
import Course from './Course';
import './page.css';
import Scrollable from '@/components/Scrollable';
import { CoursesContext } from '@/providers/CoursesContext';

const Page: React.FC = () => {
	const { courses, setCourses } = useContext(CoursesContext);

	const updateCourses = (input: Course[]) => {
		const updated: Course[] = input;

		for (let i = 0; i < input.length; i++) {
			updated[i].period = i + 1;
		}

		setCourses(updated);
	};

	return (
		<Scrollable className='full courses flex-col flex-gap'>
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
								<Course course={course} />
							</Reorder.Item>
						);
					})}
				</Reorder.Group>
			)}
		</Scrollable>
	);
};

export default Page;
