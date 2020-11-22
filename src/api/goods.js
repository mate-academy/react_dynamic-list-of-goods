// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then(todos => todos.sort(
    (todo1, todo2) => todo1.name.localeCompare(todo2.name),
  ).filter((_, index) => index < 5));

export const getRedGoods = () => fetch(API_URL)
  .then(response => response.json())
  .then(todos => todos.filter(todo => todo.color === 'red'));
