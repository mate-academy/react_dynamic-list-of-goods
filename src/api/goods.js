// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods);
}

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then((goods) => {
    goods.sort((left, right) => left.name.localeCompare(right.name));

    return goods.slice(0, 5);
  });

export const getRedGoods = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods.filter(good => good.color === 'red'));
