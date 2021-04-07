// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(data => data.sort((a, b) => a.name.localeCompare(b.name)))
  .then(sortedList => sortedList.slice(0, 5));

export const getRed = () => getAll()
  .then(data => data.filter(item => item.color === 'red'));
