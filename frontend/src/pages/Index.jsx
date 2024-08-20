import { AiFillPlusSquare } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import TodoList from "../components/todoList";
import axios from "axios";
import { useRef, useState } from "react";
import SearchList from "../components/searchList";

// importing audio files
import { playClick } from "../assets/clickEffect.js";

// add key functionality
import useEnter from "../assets/enterTodo.jsx";

const Index = () => {
	const [value, setValue] = useState("");
	const [search, setsearch] = useState("");
	const [searchData, setsearchData] = useState([]);
	const [display, setDisplay] = useState("default");

	const fetchResults = async (target) => {
		const { data } = await axios.get(`http://localhost:3000/todo`);
		const searchResult = await data.filter((match) => {
			return target && match && match.text.toLowerCase().includes(target);
		});
		setsearchData(searchResult);
	};
	const handleSearch = (target) => {
		setsearch(target);
		fetchResults(target);
	};

	// filtering todos
	const enterTodo = async () => {
		try {
			playClick();
			await axios.post(`http://localhost:3000/todo`, {
				text: value,
			});
			setValue("");
		} catch (error) {
			console.log("error while inserting data", error);
		}
	};

	const searchTodo = async () => {
		try {
			playClick();
			const { data } = await axios.get(
				`http://localhost:3000/todo/search`,
				{
					search: search,
				}
			);
			setsearchData(data);
		} catch (error) {
			console.log("error while inserting data", error);
		}
	};
	const enterRef = useRef();
	const searchRef = useRef();

	// keyboard functionality
	useEnter(enterRef, enterTodo);
	useEnter(searchRef, searchTodo);
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
						refX={enterRef}
						onClick={enterTodo}
						className="w-full h-full flex-1 text-[#3983f0] rounded-lg p-0 m-0 cursor-pointer"
					/>
				</div>
				<div className=" flex justify-between items-center my-3">
					<div className=" flex justify-evenly gap-x-4">
						<select
							onClick={(e) => setDisplay(e.target.value)}
							name="type"
							id="type"
							className=" px-2 cursor-pointer">
							<option value="default">Default</option>
							<option value="completed">Completed</option>
							<option value="inProgress">In progress</option>
						</select>
						<button
							onClick={async () => {
								try {
									await axios.put(
										"http://localhost:3000/todo/all_clear"
									);
								} catch (error) {
									console.log("error while updating", error);
								}
							}}
							name="mark-all-completed"
							className="bg-[#a855ee] text-white px-1 py-1 rounded-lg">
							{" "}
							Mark All Completed{" "}
						</button>
					</div>
					<div className=" flex justify-evenly items-center gap-x-4 h-8">
						<span className="relative">
							<input
								type="search"
								name="search"
								id="search"
								placeholder="     search for a todo"
								className=" px-1 py-1"
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
							/>
							<ul className=" absolute w-full rounded-lg bg-slate-200 bg-opacity-70 list-none p-1 text-center text-xl font-semibold">
								{searchData.map((res, index) => {
									return (
										<SearchList
											key={index}
											index={index}
											text={res.text}
										/>
									);
								})}
							</ul>
						</span>
						<FaMagnifyingGlass
							refX={searchRef}
							onClick={searchTodo}
							className=" bg-[#3983f0] h-full w-full p-1 rounded text-white cursor-pointer"
						/>
					</div>
				</div>
				<div className="list">
					<div className=" flex flex-col">
						<h2 className="text-center text-2xl font-bold mb-2">
							Your Targets
						</h2>
						<TodoList display={display} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Index;
