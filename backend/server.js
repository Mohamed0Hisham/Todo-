const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todo");
const cors = require('cors')

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors())

app.use("/todo", todoRoutes);
mongoose
	.connect("mongodb://localhost:27017/TodoApp")
	.then((res) => {
		app.listen(PORT);
		console.log(`Server started at port ${PORT}`);
	})
	.catch((err) => {
		console.log(`error while connecting to the database`, err);
	});
