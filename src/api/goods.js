// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const todos = await getAll();

  todos.sort((a, b) => a.name.localeCompare(b.name));
  todos.length = 5;

  return todos;
};

export const getRedGoods = async() => {
  const todos = await getAll();

  return todos.filter(todo => todo.color === 'red');
};
