/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Todo from "./todo";
import axios from "axios";

const TodoList = ({ display }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			try {				
				switch (display) {
					case "completed":
						{
							const { data } = await axios.get(
								"http://localhost:3000/todo/completed"
							);
							setData(data);
						}
						break;
					case "inProgress":
						{
							const { data } = await axios.get(
								"http://localhost:3000/todo/not_completed"
							);
							setData(data);
						}
						break;
					default: {
						const { data } = await axios.get(
							"http://localhost:3000/todo"
						);
						setData(data);
					}
				}
			} catch (error) {
				console.log("error while fetching data", error);
			}
		})();
	},[data,display]);
	return (
		<>
			{data.map((todo, index) => {
				return (
					<div
						key={index}
						className="flex items-center justify-center text-start px-3 py-2 bg-white mb-1 border-b border-solid ">
						<Todo
							text={todo.text}
							isCompleted={todo.completed}
							id={todo._id}
							index={index}
						/>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
