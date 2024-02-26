import {
	DialogContent,
	DialogTitle,
	DialogHeader,
	DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';

import { useState } from 'react';
import { useTasks } from '@/contexts/TasksContext';
import { TaskType } from '@/types/TaskType';

type Props = {
	onOpen: (open: boolean) => void;
	task?: TaskType;
};

export const FormModal = ({ onOpen, task }: Props) => {
	const [name, setName] = useState(task ? task.name : '');
	const { dispatch } = useTasks();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (task) {
			dispatch({ type: 'edit', payload: { id: task.id, name } });
		} else {
			dispatch({ type: 'add', payload: name });
		}
		onOpen(false);
		setName('');
	};

	return (
		<DialogContent>
			<DialogHeader className="mb-4">
				<DialogTitle>
					{task ? 'Editar tarefa' : 'Adicionar nova tarefa'}
				</DialogTitle>
			</DialogHeader>
			<form onSubmit={handleSubmit}>
				<div className="grid w-full gap-3">
					<Label htmlFor="name">Nome</Label>
					<Input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<DialogFooter>
						<Button type="submit">Salvar</Button>
					</DialogFooter>
				</div>
			</form>
		</DialogContent>
	);
};
