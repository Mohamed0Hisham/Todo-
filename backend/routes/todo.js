const express = require("express");
const todoController = require("../controllers/todo");
const router = express.Router();

router.get("/search", todoController.getSearchResult);
router.get("/completed", todoController.getCompletedTodo);
router.get("/not_completed", todoController.getNotCompletedTodo);
router.get("/", todoController.getTodo);
router.post("/", todoController.postTodo);
router.put("/all_clear", todoController.putAllTodo);
router.put("/:id", todoController.putTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
