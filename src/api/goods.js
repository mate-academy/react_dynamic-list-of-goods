// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const getFiveFirst = () => getAll()
  .then(goods => goods.sort(
    (a, b) => a.name.localeCompare(b.name),
  ))
  .then(goods => goods.splice(0, 5));

export const getRedGoods = () => getAll()
  .then(goods => goods.filter(
    ({ color }) => color === 'red',
  ));
