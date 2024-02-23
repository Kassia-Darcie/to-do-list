import { TasksList } from './components/TasksList';

function App() {
	return (
		<>
			<div className="container">
				<h1 className="text-5xl text-center font-bold my-8">To do List</h1>
				<TasksList />
			</div>
		</>
	);
}

export default App;
