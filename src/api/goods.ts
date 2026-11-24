import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .catch(() => {
      throw new Error('Unable to reach the goods server');
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch goods');
      }

      return response.json().catch(() => {
        throw new Error('Failed to parse goods data');
      });
    });
}

export const get5First = () => {
  return getAll().then(goods =>
    goods.sort((g1, g2) => g1.name.localeCompare(g2.name)).slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
