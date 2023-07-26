import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to receive data');
      }

      return response.json();
    });
}

export const getGoods = (amount: number, color: string) => {
  return getAll()
    .then(goods => {
      if (amount) {
        return goods
          .sort((good1, good2) => good1.name.localeCompare(good2.name))
          .splice(0, amount);
      }

      if (color) {
        return goods.filter(good => good.color === color);
      }

      return goods;
    });
};
