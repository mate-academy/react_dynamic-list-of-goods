import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      return response.json();
    })
    .catch(() => {
      throw new Error('Failed to fetch goods');
    });
}

export const get5First = () => {
  return getAll().then(goods =>
    goods.toSorted((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
