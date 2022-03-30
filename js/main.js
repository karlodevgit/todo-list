const form = document.getElementById("todoForm");
const todo = document.getElementById("todoInputText");
const todoLists = document.getElementById("todoLists");
const todoItem = document.getElementsByClassName("todo");

let todos = [];

const displayTodos = (todosArray) => {
  let updatedTodos = "";
  todosArray.map((todo) => {
    updatedTodos += `<li class="todo">${todo}<button id="delBtn">X</button></li> `;
  });
  todoLists.innerHTML = updatedTodos;
  console.log(todos);
};

window.onclick = (e) => {
  if (e.target.id === "delBtn") {
    e.target.parentElement.remove();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todo.value) {
    todos.push(todo.value);
    todo.value = "";
    displayTodos(todos);
  }
});
