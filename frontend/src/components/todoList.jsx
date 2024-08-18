import Todo from "./todo";

const TodoList = () => {
	return (
		<div className=" flex flex-col">
			<h2 className="text-center text-2xl font-bold mb-2">Your Targets</h2>
			<Todo />
			<Todo />
		</div>
	);
};

export default TodoList;
