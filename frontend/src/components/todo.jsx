import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";

const Todo = (props) => {
	const [completed,setCompleted] = useState(props.isCompleted);
	return (
		<>
			<span className="flex-[8]">{props.text}</span>
			<div className="flex-[2] flex justify-evenly text-lg">
				<span className="toggle text-xl text-[#3983f0] cursor-pointer">
					{completed ? <FaToggleOn /> : <FaToggleOff />}
				</span>
				<FaTrashAlt className="text-red-500 cursor-pointer" />
				<FaCheck className="text-green-400 cursor-pointer" />
			</div>
		</>
	);
};

export default Todo;
