const Todo = require("../db/models/todoModel");
const mongoose = require("mongoose");

exports.getTodo = async (req, res, next) => {
	const allTodos = await Todo.find();
	res.json(allTodos);
};
exports.postTodo = (req, res, next) => {
	const text = req.body.text;
	const newObject = new Todo({
		text: text,
		completed: false,
	});
	newObject
		.save()
		.then(() => {
			console.log("new todo inserted");
		})
		.catch((err) => {
			console.log("error while inserting a new todo", err);
		});
		res.end();
};

exports.putTodo = async (req, res, next) => {
	const target = req.params.id;
	const text = req.body.text;
	const isCompleted = req.body.completed;
	if (!target) {
		console.log("no specified target");
		res.send("please provide an id");
	}
	if (!text && !isCompleted) {
		console.log("no updates");
		res.send("No updates to be processed");
	}
	console.log("ready to update");

	await Todo.findByIdAndUpdate(target, {
		text: text,
		completed: isCompleted,
	});
	res.end();
};

exports.deleteTodo = async (req, res, next) => {
	const target = req.params.id;
	await Todo.findByIdAndDelete(target);
	console.log("deleted");

	res.end();
};
