// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(todos => todos.filter(todo => todo.id < 6))
    .then(firstTodos => firstTodos
      .sort((firstTodo, secondTodo) => firstTodo.name
        .localeCompare(secondTodo.name)));
}

export function getRed() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(todos => todos.filter(todo => todo.color === 'red'));
}
