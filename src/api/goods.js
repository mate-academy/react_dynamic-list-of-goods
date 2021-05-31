// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  fetch(API_URL)
    .then(response => response.json())
    .then(data => data
      .slice(0, 5)
      .sort((good1, good2) => good1.name.localeCompare(good2.name)))
);

export const getRedGoods = () => (
  fetch(API_URL)
    .then(response => response.json())
    .then(data => data.filter(({ color }) => color === 'red'))
);
