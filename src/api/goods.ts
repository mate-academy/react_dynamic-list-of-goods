import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5FirstGoods = () => {
  return getAll()
    .then(goods => {
      const result = goods
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5);

      return result;
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      const result = goods
        .filter(good => good.color === 'red');

      return result;
    });
};
