import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Task from './Task';

interface P {
	data: Course;
	setData: React.Dispatch<React.SetStateAction<Course[]>>;
}

const Course: React.FC<P> = ({ data, setData }) => {
	const [tasks, setTasks] = useState<Task[]>(data.todo);

	return (
		<motion.div className='course outline'>
			<div className='period center'>
				<h1>{data.period}</h1>
			</div>
			<div className='content full'>
				{/* <h3>{data.name}</h3> */}
				{tasks.map((task: Task, idx: number) => {
					return <Task tasks={tasks} setTasks={setTasks} index={idx} data={task} key={idx} />;
				})}
				<input className='new' placeholder='add new...' />
			</div>
		</motion.div>
	);
};

export default Course;
