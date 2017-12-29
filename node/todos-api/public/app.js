/* global $ */
const url = '/api/todos';

// add single todo to ul
function addTodo(todo) {
  // create a newTodo list item
  const newTodo = $(`<li class="task"> ${todo.name} <span>X</span></li>`);

  // storing id to jquery object data
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);

  // add class 'done' if completed
  if (todo.completed) {
    newTodo.addClass('done');
  }

  // append newTodo to ul
  $('.list').append(newTodo);
}

// loop through array of todos in db and add each to ul
function addTodos(todos) {
  // accepts array of todos
  // add todos to the page
  todos.forEach(todo => {
    addTodo(todo);
  });
}

// send post request to todo
function createTodo() {
  const userInput = $('#todoInput').val();

  // send request to create new todo
  $.post(url, {
    name: userInput
  })
    .then(newTodo => {
      // clear input field after creating newTodo
      $('#todoInput').val('');
      // add todo to list
      addTodo(newTodo);
    })
    .catch(err => {
      console.log(err);
    });
}

function removeTodo(todo) {
  // retreve span id
  const id = todo.data('id');

  // delete request
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${id}`
  })
    .then(todo => {
      console.log('deleted');
    })
    .catch(err => {
      console.log(err);
    });

  // remove li from DOM
  todo.remove();
}

function updateTodo(todo) {
  const id = todo.data('id');
  const isCompleted = todo.data('completed');
  const updateData = { completed: !isCompleted };
  console.log(isCompleted);
  console.log(updateData);
  // if completed, update to false;
  $.ajax({
    method: 'PUT',
    url: `/api/todos/${id}`,
    data: updateData
  })
    .then(updatedTodo => {
      // toggle class of todo to either show or remove strikethru
      todo.toggleClass('done');
      // once updatedTodo is returned, flip todo's data
      todo.data('completed', !isCompleted)
    })
    .catch();
}

// code in here will only run when DOM is ready
$(document).ready(() => {
  $.getJSON(url)
    .then(addTodos)
    .fail(err => {
      console.log(err);
    });

  $('#todoInput').keypress(event => {
    // if enter is pressed
    if (event.which === 13) {
      // create todo
      createTodo();
    }
  });

  $('.list').on('click', 'span', function(event) {
    // 2nd argument of on() defines event delegation: only span under .list will be monitored for click events

    // stops event from bubbling up
    event.stopPropagation();
    removeTodo($(this).parent());
  });

  $('.list').on('click', 'li', function() {
    // when li clicked, toggle completion
    // send put request
    updateTodo($(this));
  });
});
