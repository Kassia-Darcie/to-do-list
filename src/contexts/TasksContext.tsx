import { TaskActions, taskReducer } from '@/reducers/taskReducer';
import { TaskType } from '@/types/TaskType';
import React, {
	ReactNode,
	createContext,
	useContext,
	useReducer,
	useState,
} from 'react';

const TasksContext = createContext<TasksContextType | null>(null);

type TasksContextType = {
	tasks: TaskType[];
	dispatch: React.Dispatch<TaskActions>;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TasksProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, dispatch] = useReducer(taskReducer, []);
	const [open, setOpen] = useState(false);

	return (
		<TasksContext.Provider value={{ tasks, dispatch, open, setOpen }}>
			{children}
		</TasksContext.Provider>
	);
};

const useTasks = () => {
	const context = useContext(TasksContext);
	if (context === null)
		throw new Error('useTasks was used outside the TasksProvider');
	return context;
};

export { TasksProvider, useTasks };
