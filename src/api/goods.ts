import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(() => {
      // Removed 'error' as it is unused
      return []; // Return an empty array in case of an error
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => [...goods].sort((a, b) => a.name.localeCompare(b.name)))
    .then(sortedGoods => sortedGoods.slice(0, 5))
    .catch(() => {
      // Removed 'error' as it is unused
      return []; // Return an empty array in case of an error
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(() => {
      // Removed 'error' as it is unused
      return []; // Return an empty array in case of an error
    });
};
