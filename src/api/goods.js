// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  getAll()
    .then(result => (
      result
        .sort(({ name: a }, { name: b }) => (
          a.localeCompare(b)
        ))
        .slice(0, 5)
    ))
);

export const getRed = () => (
  getAll()
    .then(result => (
      result
        .filter(({ color }) => color === 'red')
    ))
);
