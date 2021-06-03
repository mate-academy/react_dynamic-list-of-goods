// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(data => data
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
    .filter((good, index) => index < 5));

export const getRedGoods = () => getAll()
  .then(data => [...data]
    .filter(good => good.color === 'red')
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name)));
