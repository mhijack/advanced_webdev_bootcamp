/* global $ */

function addTodos(todos) {
  // accepts array of todos
  // add todos to the page
  todos.forEach((todo) => {
    const newTodo = $(`<li class="task"> ${todo.name} </li>`);

    $('.list').append(newTodo);
  });
}

// code in here will only be ran when DOM is ready
$(document).ready(() => {
  const todosUrl = '/api/todos';

  $.getJSON(todosUrl)
    .then(addTodos)
    .fail((err) => {
      console.log(err);
    });
});
