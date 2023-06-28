import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line no-console
        console.error('Cannot fetch goods');

        return [];
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const sortedGoods = goods.sort((a, b) => a.name.localeCompare(b.name));
      const first5Goods = sortedGoods.slice(0, 5);

      return first5Goods;
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
