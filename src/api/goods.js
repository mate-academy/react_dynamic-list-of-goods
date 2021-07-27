// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.jsn`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(new Error());
}

export const get5First = () => (
  getAll().then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5))
);

export const getRedGoods = () => (
  getAll().then(goods => (goods.filter(product => product.color === 'red')))
);
