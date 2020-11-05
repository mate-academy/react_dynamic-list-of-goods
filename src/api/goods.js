// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods.slice(0, 5)
      .sort((a, b) => (
        a.color.localeCompare(b.color)
      )));
}

export function getRed() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => (
      goods.filter(item => (item.color === 'red'))
    ));
}
