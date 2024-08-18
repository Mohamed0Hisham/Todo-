import { AiFillPlusSquare } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import TodoList from "../components/todoList";
import axios from "axios";
import { useState } from "react";

const Index = () => {
	const [value, setValue] = useState("");
	return (
		<>
			<main className="flex flex-col w-full h-fit bg-[#f1f4f5] p-6">
				<h1 className="text-3xl font-bold ">Start planning Your DAY</h1>
				<div className="add-todo flex justify-betwee items-center h-12 my-4">
					<input
						type="text"
						placeholder="Add todo"
						name="add-new"
						id="addNew"
						className=" mr-4 h-full px-6 flex-[9]"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<AiFillPlusSquare
						onClick={async () => {
							try {
								await axios.post(`http://localhost:3000/todo`, {
									text: value,
								});
								setValue("");
							} catch (error) {
								console.log(
									"error while inserting data",
									error
								);
							}
						}}
						className="w-full h-full flex-1 text-[#3983f0] rounded-lg p-0 m-0 cursor-pointer"
					/>
				</div>
				<div className=" flex justify-between items-center my-3">
					<div className=" flex justify-evenly gap-x-4">
						<select
							name="type"
							id="type"
							className=" px-2 cursor-pointer">
							<option value="default">Default</option>
							<option value="completed">Completed</option>
							<option value="inProgress">In progress</option>
						</select>
						<button
							name="mark-all-completed"
							className="bg-[#a855ee] text-white px-1 py-1 rounded-lg">
							{" "}
							Mark All Completed{" "}
						</button>
					</div>
					<div className=" flex justify-evenly items-center gap-x-4 h-8">
						<input
							type="search"
							name="search"
							id="search"
							placeholder="     search for a todo"
							className=" px-1 py-1"
						/>
						<FaMagnifyingGlass className=" bg-[#3983f0] h-full w-full p-1 rounded text-white cursor-pointer" />
					</div>
				</div>
				<div className="list">
					<div className=" flex flex-col">
						<h2 className="text-center text-2xl font-bold mb-2">
							Your Targets
						</h2>
						<TodoList />
					</div>
				</div>
			</main>
		</>
	);
};

export default Index;
