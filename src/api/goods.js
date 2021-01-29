// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods
    .slice(0, 5)
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name)));

export const getRed = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods
    .filter(good => good.color === 'red'));
