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
      const first5Goods = goods
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5);

      return first5Goods;
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods.filter(good => good.color === 'red');

      return redGoods;
    });
};
