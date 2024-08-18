import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import axios from "axios";

const Todo = (props) => {
	const { text, isCompleted, id } = props;
	const [completed, setCompleted] = useState(isCompleted);
	return (
		<>
			<span className="flex-[8]">
				<span className={completed ? "line-through text-green-400":''}>
					{text}
				</span>
			</span>
			<div className="flex-[2] flex justify-evenly text-lg">
				<span
					className="toggle text-xl text-[#3983f0] cursor-pointer"
					onClick={() => {
						setCompleted(!completed);
					}}>
					{completed ? <FaToggleOn /> : <FaToggleOff />}
				</span>
				<FaTrashAlt
					onClick={() => {
						(async () => {
							try {
								await axios.delete(
									`http://localhost:3000/todo/${id}`
								);
							} catch (error) {
								console.log("error while deleting:", error);
							}
						})();
					}}
					className="text-red-500 cursor-pointer"
				/>
				<FaCheck
					onClick={() => {
						setCompleted(true);
					}}
					className="text-green-400 cursor-pointer"
				/>
			</div>
		</>
	);
};
export default Todo;
