// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = () => (
  fetch(API_URL)
    .then(response => response.json())
);

export const get5First = () => (
  getAll()
    .then(goods => goods.sort((current, next) => (
      current.name.localeCompare(next.name)
    )))
    .then(goods => goods.slice(0, 5))
);

export const getRedGoods = () => (
  getAll()
    .then(goods => goods.filter(good => (
      good.color === 'red'
    )))
);
