const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use('todo',)

mongoose
	.connect("mongodb://localhost:27017")
	.then(app.listen(PORT), () => {
		console.log(`Server started at port ${PORT}`);
	})
	.catch((err) => {
		console.log(`error while connecting to the database`, err);
	});
