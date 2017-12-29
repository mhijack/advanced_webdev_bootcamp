const mongoose = require('mongoose');

// All executed collection methods will log output of their arguments to your console.
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// tell mongoose we're using Promise methods
mongoose.Promise = Promise;

// the following 2 ways of exporting are equivalent
exports.Todo = require('./todo');

module.exports = exports;
// module.exports.Todo = require('./todo');
