import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { MdDelete } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { TaskType } from '@/types/TaskType';
import { useTasks } from '@/contexts/TasksContext';
import { Dialog } from './ui/dialog';
import { FormModal } from './FormModal';

import { useState } from 'react';

type Props = {
	task: TaskType;
};

export const Task = ({ task }: Props) => {
	const { dispatch } = useTasks();
	const [open, setOpen] = useState(false);
	return (
		<li className="flex items-center  space-x-3 w-full">
			<Checkbox
				id="taskCheckbox"
				checked={task.isDone}
				onClick={() => dispatch({ type: 'check', payload: { id: task.id } })}
			/>

			<Label
				htmlFor="taskCheckbox"
				className="text-2xl flex-1"
			>
				{task.name}
			</Label>
			<Dialog
				open={open}
				onOpenChange={setOpen}
			>
				<div className="flex text-sm ml-auto">
					<BiEditAlt
						onClick={() => setOpen(true)}
						className="text-muted-foreground hover:text-blue-600 cursor-pointer mb-auto"
					/>

					<MdDelete
						onClick={() =>
							dispatch({ type: 'delete', payload: { id: task.id } })
						}
						className="text-destructive hover:text-destructive/80 cursor-pointer mb-auto"
					/>
				</div>

				<FormModal
					onOpen={setOpen}
					task={task}
				/>
			</Dialog>
		</li>
	);
};
