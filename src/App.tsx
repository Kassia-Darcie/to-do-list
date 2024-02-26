import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { TasksList } from './components/TasksList';
import { FormModal } from './components/FormModal';
import { TasksProvider, useTasks } from './contexts/TasksContext';
import { useState } from 'react';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<div className="container max-w-xl flex flex-col items-center gap-3">
				<h1 className="text-5xl text-center font-bold my-8">To do List</h1>
				<TasksList />
				<DialogTrigger asChild>
					<Button>Nova tarefa</Button>
				</DialogTrigger>
			</div>

			<FormModal onOpen={setOpen} />
		</Dialog>
	);
}

export default App;
