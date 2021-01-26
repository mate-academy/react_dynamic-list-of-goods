// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = () => fetch(API_URL)
  .then(response => response.json());

export function getAll() {
  return request();
}

export const get5First = () => request()
  .then(goods => goods.sort((a, b) => (a.name.localeCompare(b.name))))
  .then(goods => goods.slice(0, 5));

export const getRedGoods = () => request()
  .then(result => result.filter(good => good.color === 'red'));
