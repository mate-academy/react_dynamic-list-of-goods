import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// Tests required me to send a new request for each click. So commented these out.
export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name)))
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods
      .filter(good => good.color === 'red')); // get only red
};
