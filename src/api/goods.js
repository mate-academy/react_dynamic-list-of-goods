// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json()
      .then(responseJSON => responseJSON
        .sort((prev, current) => prev.name
          .localeCompare(current.name)).slice(0, 5)));
}

export function getRed() {
  return fetch(API_URL)
    .then(response => response.json()
      .then(responseJSON => responseJSON.filter(good => good.color === 'red')));
}
