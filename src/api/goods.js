// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(result => result
    .filter((elem, i) => i < 5)
    .sort((a, b) => a.name.localeCompare(b.name)));

export const getRed = () => getAll()
  .then(result => result
    .filter(elem => elem.color === 'red'));
