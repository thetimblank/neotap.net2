import React from 'react';

interface P {
    data: Course;
}

const Course: React.FC<P> = ({ data }) => {

    return (
        <div className='course'>
            <h2>{data.name}</h2>
            {data.todo.map((task: Task, _: number) => {
                return <div key={_} className='task'>
                    <p>{task.name}</p>
                    <p>{task.priority}</p>
                </div>
            })}
        </div>
    )
}

export default Course;