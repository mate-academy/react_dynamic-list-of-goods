// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods.sort((currGood, nextGood) => (
    currGood.name.localeCompare(nextGood.name))).slice(0, 5));

export const getRedGoods = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods.filter(good => good.color === 'red'));
