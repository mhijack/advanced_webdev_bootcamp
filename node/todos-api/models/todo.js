const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    // notify user if not given a value
    required: 'Name cannot be blank.',
  },
  completed: {
    type: Boolean,
    // set default value
    default: false,
  },
  createdDate: {
    type: Date,
    // gives the current date when a new todo is created
    default: Date.now,
  },
});

const Todo = mongoose.model('Todo', todoSchema);
// name         String
// completed    Boolean
// createdDate  Date

module.exports = Todo;
