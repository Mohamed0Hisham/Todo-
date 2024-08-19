const express = require("express");
const todoController = require("../controllers/todo");
const router = express.Router();

router.get('/',todoController.getTodo);
router.post('/',todoController.postTodo);
router.put('/all_clear',todoController.putAllTodo);
router.put('/:id',todoController.putTodo);
router.delete('/:id',todoController.deleteTodo);

module.exports = router;
