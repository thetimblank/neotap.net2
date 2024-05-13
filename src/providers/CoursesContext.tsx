'use client';

import { createContext, useState } from 'react';

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
				name: 'hw1',
			},
			{
				name: 'hw1',
			},
			{
				name: 'hw3',
			},
			{
				name: 'hw4',
			},
			{
				name: 'hw5',
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

interface CoursesContextProps {
	setCourse: (courseId: number, updatedCourse: Course) => void;
	setCourses: (courses: Course[]) => void;
	courses: Course[];
}

export const CoursesContext = createContext<CoursesContextProps>({
	courses: [],
	setCourse: () => {},
	setCourses: () => {},
});

export const CoursesProvider = ({ children }: { children: React.ReactNode }) => {
	const [courses, setCourses] = useState<Course[]>(data);

	const setCourse = (courseId: number, updatedCourse: Course) => {
		setCourses((prevCourses) => prevCourses.map((course, index) => (index === courseId ? updatedCourse : course)));
	};

	return <CoursesContext.Provider value={{ courses, setCourse, setCourses }}>{children}</CoursesContext.Provider>;
};
