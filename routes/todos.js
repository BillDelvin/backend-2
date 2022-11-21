const express = require("express");
const router = express();

const imageFilter = require("../middleware/multer");
const { validationTodos, addTodos, getTodos } = require("../controller/todos");

// HTTP methods
router.post("/todos", imageFilter, [validationTodos, addTodos]); // multi middleware
router.get("/todos", getTodos);

module.exports = router;
