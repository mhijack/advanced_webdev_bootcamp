const db = require('../models/index');

// to use: helper.getTodos
exports.getTodos = (req, res) => {
  // able to chain .then() and .catch() because of mongoose.Promise = Promise
  db.Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then((newTodo) => {
      // custom status code thattells the state of database interaction
      res.status(201).json(newTodo);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findTodo = (req, res) => {
  // parameter variables are stored in req.params
  db.Todo.findById(req.params.todoId)
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    // setting { new: true } tells return updated version after updating
    .then((todo) => {
      // responds by default the old object
      res.json(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.removeTodo = (req, res) => {
  db.Todo.findByIdAndRemove(req.params.todoId)
    .then(() => {
      res.json({ message: 'deleted.' });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = exports;
// changing exports.func to module.exports.func will not affect functionality. module.exports = exports;
