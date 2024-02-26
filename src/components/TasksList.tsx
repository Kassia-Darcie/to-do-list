import { useTasks } from '@/contexts/TasksContext';
import { Task } from './Task';

export const TasksList = () => {
	const { tasks, dispatch } = useTasks();

	return (
		<ul className="space-y-8 w-full my-4">
			{tasks.map((task) => (
				<Task
					task={task}
					key={task.id}
				/>
			))}
		</ul>
	);
};
