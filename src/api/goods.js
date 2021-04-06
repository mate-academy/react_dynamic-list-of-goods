// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then(products => products.slice(0, 5)
    .sort((previos, next) => previos.name.localeCompare(next.name)));

export const getRedGoods = () => fetch(API_URL)
  .then(response => response.json())
  .then(products => products.filter(product => product.color === 'red'));
