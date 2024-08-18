import { useEffect, useState } from "react";
import Todo from "./todo";
import axios from "axios";

const TodoList = () => {
	const [data, setData] = useState([]);
	// const [text, setText] = useState("");
	// const [completed, setCompleted] = useState(false);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get("http://localhost:3000/todo");
				// console.log(data);
				setData(data);
			} catch (error) {
				console.log("error while fetching data", error);
			}
		})();
	}, []);
	return (
		<>
			{data.map((todo,index) => {
				return (
					<div
						key={index}
						className="flex items-center justify-center text-start px-3 py-2 bg-white mb-1 border-b border-solid ">
						<Todo text={todo.text} isCompleted={todo.completed} />
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
