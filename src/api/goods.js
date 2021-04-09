// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(goods => goods.slice(0, 5)
    .sort((previous, next) => previous.name.localeCompare(next.name)));

export const getRedGoods = () => getAll()
  .then(goods => goods.filter(good => good.color === 'red'));
