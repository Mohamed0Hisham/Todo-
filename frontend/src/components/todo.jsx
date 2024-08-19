/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import axios from "axios";

const Todo = (props) => {
	const { text, isCompleted, id, index } = props;
	return (
		<>
			<span className="mr-2">{`${index + 1} ) `}</span>
			<span className="flex-[8]">
				<span
					className={
						isCompleted ? "line-through text-green-400" : ""
					}>
					{text}
				</span>
			</span>
			<div className="flex-[2] flex justify-evenly text-lg items-center">
				<span
					className="toggle text-3xl tex text-[#3983f0] cursor-pointer"
					onClick={async () => {
						await axios.put(`http://localhost:3000/todo/${id}`, {
							completed: !isCompleted,
						});
					}}>
					{isCompleted ? <FaToggleOn /> : <FaToggleOff />}
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
					onClick={async () => {
						await axios.put(`http://localhost:3000/todo/${id}`, {
							completed: true,
						});
					}}
					className="text-green-400 cursor-pointer"
				/>
			</div>
		</>
	);
};
export default Todo;
