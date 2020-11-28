// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const request = () => fetch(API_URL).then(response => response.json());

export const getAll = () => request().then(result => result);
export const get5First = () => request().then(result => result
  .sort((a, b) => a.name.localeCompare(b.name))
  .slice(0, 5));
export const getRedGoods = () => request().then(result => result
  .filter(res => res.color === 'red'));
