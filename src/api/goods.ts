import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Cannot fetch goods');
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
    })
    .catch(error => {
      throw new Error('Cannot fetch 5 first goods', error);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => {
      throw new Error('Cannot fetch red goods', error);
    });
};
