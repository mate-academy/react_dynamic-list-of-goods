// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => error);
}

export const get5First = () => (
  getAll()
    .then(response => response
      .sort((prevName, nextName) => prevName.name.localeCompare(nextName.name)))
    .then(response => response.slice(0, 5))
);

export const getRed = () => (
  getAll()
    .then(response => response
      .filter(product => product.color === 'red'))
);
