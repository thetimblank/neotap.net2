import React from 'react';
import { motion } from 'framer-motion';

interface P {
	data: Task;
}

const Task: React.FC<P> = ({ data }) => {
	return (
		<motion.div className='task'>
			<div className='content full'>
				<p>{data.name}</p>
				<p>{data.priority}</p>
				<p>{data.dueAt?.toLocaleString()}</p>
			</div>
			<div className='modify center'>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z' />
				</svg>
			</div>
			<div className='modify center'>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>
					<path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z' />
				</svg>
			</div>
		</motion.div>
	);
};

export default Task;
