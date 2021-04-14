// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(people => people
    .sort((peopleA, peopleB) => peopleA.name
      .localeCompare(peopleB.name)).slice(0, 5));

export const getRedGoods = () => getAll()
  .then(color => color.filter(item => item.color === 'red'));
