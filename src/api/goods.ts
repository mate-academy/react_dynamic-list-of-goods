import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const fiveFirstGoods = [...goods];

      fiveFirstGoods.sort((a, b) => a.name.localeCompare(b.name));
      fiveFirstGoods.length = 5;

      return fiveFirstGoods;
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter((good) => good.color === 'red'));
};
