import { TaskType } from '@/types/TaskType';

export type TaskActions =
	| { type: 'add'; payload: string }
	| { type: 'check'; payload: { id: string } }
	| { type: 'edit'; payload: { name: string; id: string } }
	| { type: 'delete'; payload: { id: string } };

export const taskReducer = (state: TaskType[], action: TaskActions) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{ id: crypto.randomUUID(), name: action.payload, isDone: false },
			];
		case 'check':
			return state.map((task) =>
				task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
			);
		case 'edit':
			return state.map((task) =>
				task.id === action.payload.id
					? { ...task, name: action.payload.name }
					: task
			);
		case 'delete':
			return state.filter((task) => task.id !== action.payload.id);
		default:
			throw new Error('Unknown action');
	}
};
