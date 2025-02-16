import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(() => {
      return 'Couldnt load';
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const sortedGoods = goods.sort((a, b) => a.name.localeCompare(b.name));
      const first5 = sortedGoods.slice(0, 5);

      return first5;
    })
    .catch(() => {
      return 'Couldnt load';
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods.filter(good => good.color === 'red');

      return redGoods;
    })
    .catch(() => {
      return 'Couldnt load';
    });
};
