import { MdDelete } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';

export const Task = () => {
	return (
		<li className="flex items-center w-52 ">
			<input
				className="size-6 mr-3"
				type="checkbox"
				name="taskCheckbox"
				id="taskCheckbox"
			/>
			<span className="text-2xl mr-2">Task title</span>
			<BiEditAlt className="text-blue-500 hover:text-blue-600 cursor-pointer mb-auto" />
			<MdDelete className="text-red-500 hover:text-red-600 cursor-pointer mb-auto" />
		</li>
	);
};
