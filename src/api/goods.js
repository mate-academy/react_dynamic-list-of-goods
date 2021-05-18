// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => response
      .sort((prev, next) => prev.name.localeCompare(next.name)))
    .then(response => response
      .slice(0, 5));
}

export function getRedGoods() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => response
      .filter(product => product.color === 'red'));
}
