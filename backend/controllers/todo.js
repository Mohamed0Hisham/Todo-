const Todo = require("../db/models/todoModel");

exports.getTodo = async (req, res, next) => {
	// const allTodos = await Todo.find();
    console.log('get controller completed');
    res.send('all done')
};

