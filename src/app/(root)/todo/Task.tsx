import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { CoursesContext } from '@/providers/CoursesContext';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

interface P {
	task: Task;
	courseIndex: number;
}

const Task: React.FC<P> = ({ task, courseIndex }) => {
	const { courses, setCourse } = useContext(CoursesContext);
	const [hovering, setHovering] = useState<boolean>(false);

	const handleDuplicate = () => {
		setCourse(courseIndex, {
			...courses[courseIndex],
			todo: courses[courseIndex].todo.concat([Object.assign({}, task)]),
		});
	};

	const handleCheckOff = () => {
		setCourse(courseIndex, {
			...courses[courseIndex],
			todo: courses[courseIndex].todo.filter((current) => {
				if (current != task) {
					return true;
				}

				return false;
			}),
		});
	};

	const handleEdit = () => {
		modals.open({
			title: 'Editing Task',
			children: (
				<form
					className='flex-col'
					action={(query: any) => {
						const input = query.get('task');

						if (input.length < 1 || input === task.name) {
							notifications.show({ title: 'Sorry!', message: 'Please provide a task to change it to.' });
							return;
						}

						const modifiedTodo = courses[courseIndex].todo;

						for (let i = 0; i < modifiedTodo.length; i++) {
							if (modifiedTodo[i] === task) {
								modifiedTodo.splice(i, 1, {
									...task,
									name: input,
								});
							}
						}

						setCourse(courseIndex, {
							...courses[courseIndex],
							todo: modifiedTodo,
						});

						modals.closeAll();
					}}>
					<input className='input' placeholder='Your new task...' defaultValue={task.name} name='task' />
					<button className='btn' type='submit'>
						Okay
					</button>
				</form>
			),
		});
	};

	return (
		<div className='task'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={hovering ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
				className='remove center'>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
				</svg>
			</motion.div>
			<button
				className='content full'
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
				onClick={handleCheckOff}>
				<p>{task.name}</p>
				<p>{task.dueAt?.toLocaleString()}</p>
			</button>
			<button className='modify center' onClick={handleDuplicate}>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z' />
				</svg>
			</button>
			<button className='modify center' onClick={handleEdit}>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z' />
				</svg>
			</button>
		</div>
	);
};

export default Task;
