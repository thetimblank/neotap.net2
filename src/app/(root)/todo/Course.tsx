import React from 'react';
import { motion } from 'framer-motion';
import Task from './Task';

interface P {
	data: Course;
}

const Course: React.FC<P> = ({ data }) => {
	return (
		<motion.div
			whileTap={{
				scale: 0.9,
			}}
			className='course outline'>
			<div className='period center'>
				<h1>{data.period}</h1>
			</div>
			<div className='content full'>
				{/* <h3>{data.name}</h3> */}
				{data.todo.map((task: Task, _: number) => {
					return <Task data={task} key={_} />;
				})}
			</div>
		</motion.div>
	);
};

export default Course;
