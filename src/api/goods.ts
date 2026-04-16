import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load goods');
      }

      return response.json();
    })
    .catch(() => {
      return [];
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    const sorted = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    return sorted.slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  });
};
