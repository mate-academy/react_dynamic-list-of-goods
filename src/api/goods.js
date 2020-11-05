// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = () => (
  fetch(API_URL)
    .then(response => response.json())
);

export const get5First = () => (
  getAll()
    .then(result => result
      .sort((prevGood, nextGood) => prevGood.name.localeCompare(nextGood.name))
      .slice(0, 5))
);

export const getRedGoods = () => (
  getAll()
    .then(result => result.filter(good => good.color === 'red'))
);
