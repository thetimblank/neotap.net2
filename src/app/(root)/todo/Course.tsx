import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Task from './Task';
import { CoursesContext } from '@/providers/CoursesContext';
import { notifications } from '@mantine/notifications';

interface P {
	course: Course;
}

const Course: React.FC<P> = ({ course }) => {
	const { setCourse } = useContext(CoursesContext);

	const handleNewTask = (form: any) => {
		const query = form.get('query');

		if (!query || query.length < 1) {
			notifications.show({ title: 'Bummer!', message: 'Please provide a task to add.' });
			return;
		}

		setCourse(course.period - 1, {
			...course,
			todo: course.todo.concat({
				name: query,
			}),
		});
	};

	return (
		<motion.div layout='preserve-aspect' className='course outline'>
			<div className='period center'>
				<h1>{course.period}</h1>
			</div>
			<div className='content full'>
				<h3>{course.name}</h3>
				{course.todo.length < 1 ? (
					<p>You're all done!</p>
				) : (
					course.todo.map((task: Task, idx: number) => {
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: idx * 0.05 }}>
								<Task courseIndex={course.period - 1} task={task} />
							</motion.div>
						);
					})
				)}
				<form action={handleNewTask} className='flex-align flex-space flex-gap'>
					<input className='input new' placeholder='add new...' name='query' />
					<button type='submit' className='btn'>
						<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
							<path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
						</svg>
						Add
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Course;
