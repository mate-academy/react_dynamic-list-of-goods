import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[] | null> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      if (!goods) {
        return null;
      }

      return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      if (!goods) {
        return null;
      }

      return goods.filter(good => good.color === 'red');
    }); // get only red
};
