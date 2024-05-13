import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CoursesContext } from '@/providers/CoursesContext';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import Task from './Task';

interface P {
	course: Course;
	editing?: boolean;
}

const Course: React.FC<P> = ({ course, editing }) => {
	const { courses, setCourse, setCourses } = useContext(CoursesContext);

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

	const handleRemove = () => {
		setCourses(courses.filter((current) => current != course));
	}

	const handleEdit = () => {
		modals.open({
			title: 'Editing Course',
			children: (
				<form
					className='flex-col'
					action={(query: any) => {
						const input = query.get('course');

						if (input.length < 1 || input === course.name) {
							notifications.show({ title: 'Sorry!', message: 'Please provide a new name to change it to.' });
							return;
						}

						setCourse(course.period - 1, {
							...course,
							name: input,
						});

						modals.closeAll();
					}}>
					<input className='input' placeholder='Your new course name...' defaultValue={course.name} name='course' />
					<button className='btn' type='submit'>
						Okay
					</button>
				</form>
			),
		});
	}

	return (
		<motion.div layout='preserve-aspect' className='course outline'>
			<div className='period center'>
				<h1>{course.period}</h1>
			</div>
			<div className='content full'>
				<div className="flex-space flex-gap flex-align">
					<h3>{course.name}</h3>
					{editing &&
						<div className="flex-gap">
							<button className='icon' onClick={handleRemove}>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
									<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/>
								</svg>
							</button>
							<button className='icon' onClick={handleEdit}>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
									<path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z"/>
								</svg>
							</button>
						</div>
					}
				</div>
				{course.todo.length < 1 ? (
					<p>You&apos;re all done!</p>
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
