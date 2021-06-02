// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(goods => goods
    .sort((prev, next) => (
      prev.name.localeCompare(next.name)))
    .filter((good, index) => index < 5));

export const getRedGoods = () => getAll()
  .then(goods => goods
    .filter(good => good.color === 'red'));
