import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(() => {
      throw new Error('Something went wrong...');
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods
        .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);

      if (redGoods.length) {
        return redGoods;
      }

      throw new Error('There is no goods...');
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods.filter((good: Good) => good.color === 'red');

      if (redGoods.length) {
        return redGoods;
      }

      throw new Error('There is no red goods...');
    })
    .catch((err) => {
      throw new Error(err);
    });
};
