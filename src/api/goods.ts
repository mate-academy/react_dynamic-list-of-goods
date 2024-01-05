import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(result => {
      return result;
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods)
    .then(goods => goods.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
      .slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods)
    .then(goods => goods
      .filter(good => good.color === 'red'));
};
