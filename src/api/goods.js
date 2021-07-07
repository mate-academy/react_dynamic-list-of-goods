// eslint-disable-next-line
const BASE_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = () => fetch(BASE_URL)
  .then(response => response.json());

export const getAll = () => request();

export const getFiveFirst = () => request()
  .then(goods => goods.sort(
    (a, b) => a.name.localeCompare(b.name),
  ).slice(0, 5));

export const getRedGoods = () => request()
  .then(goods => goods.filter(good => good.color === 'red'));
