import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      goods.sort((item1, item2) => item1.name.localeCompare(item2.name));

      return goods.slice(0, 5);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
