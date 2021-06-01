// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = () => fetch(API_URL)
  .then(response => response.json());

export const get5First = () => getAll()
  .then(data => data.slice(0, 5));

export const getRedGoods = () => getAll()
  .then(data => data.filter(element => element.color === 'red'));
