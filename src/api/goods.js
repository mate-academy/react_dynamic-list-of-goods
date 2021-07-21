// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(response => (response
    .slice(0, 5).sort((f, s) => f.name.localeCompare(s.name))));

export const getRedGoods = () => getAll()
  .then(goods => (goods.filter(product => product.color === 'red')));
