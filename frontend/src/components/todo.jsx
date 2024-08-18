import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
const Todo = () => {
    const [completed,setCompleted] =useState(false);
	return (
		<div className="flex items-center justify-center text-start px-3 py-2 bg-white mb-1 border-b border-solid ">
			<span className="flex-[8]">First todo completed</span>
			<div className="flex-[2] flex justify-evenly text-lg">
				<span className="toggle text-xl text-[#3983f0] cursor-pointer">
					<FaToggleOn />
				</span>
				<FaTrashAlt className="text-red-500 cursor-pointer" />
				<FaCheck className="text-green-400 cursor-pointer" />
			</div>
		</div>
	);
};

export default Todo;
