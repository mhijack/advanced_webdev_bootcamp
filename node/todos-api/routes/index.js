const express = require('express');
const db = require('../models/index.js'); // then db.Todo will equal to Todo
const helpers = require('../helpers/todos.js');

const router = express.Router();

// for routes sharing the same url, can refactor them together as follows
router
  .route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

router
  .route('/:todoId')
  .get(helpers.findTodo)
  .put(helpers.updateTodo)
  .delete(helpers.removeTodo);

module.exports = router;
