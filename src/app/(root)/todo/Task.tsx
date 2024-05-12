import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface P {
	data: Task;
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Task: React.FC<P> = ({ data, tasks, setTasks }) => {
	const [hovering, setHovering] = useState<boolean>(false);

	return (
		<motion.div className='task'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={hovering ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
				className='remove center'>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
				</svg>
			</motion.div>
			<div
				className='content full'
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
				onClick={() =>
					setTasks(
						tasks.filter((current) => {
							if (current != data) {
								return true;
							}

							return false;
						})
					)
				}>
				<p>{data.name}</p>
				<p>{data.dueAt?.toLocaleString()}</p>
			</div>
			<div
				className='modify center'
				onClick={() => {
					const newTasks = tasks;

					newTasks.push(data);

					setTasks(newTasks);
				}}>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z' />
				</svg>
			</div>
			<div className='modify center'>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z' />
				</svg>
			</div>
		</motion.div>
	);
};

export default Task;
