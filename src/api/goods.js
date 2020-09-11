// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
}

export function getRedGoods() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data.filter(item => item.color === 'red'));
}
