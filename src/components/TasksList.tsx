import { Task } from './Task';

export const TasksList = () => {
	return (
		<ul className="space-y-8 sm:w-3/4 mx-auto mt-16">
			<Task />
			<Task />
			<Task />
			<Task />
		</ul>
	);
};
