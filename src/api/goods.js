// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(res => res.json());
}

export const get5First = () => getAll()
  .then(res => res.slice(0, 5))
  .then(res => res.sort((prev, curr) => prev.name.localeCompare(curr.name)));

export const getRedGoods = () => getAll()
  .then(res => res.filter(item => item.color === 'red'));
