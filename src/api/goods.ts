import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Not your day... Please try again later.');
      }

      return response.json();
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then((response) => {
      const sortedGoods = response.sort((a: Good, b: Good) => (
        a.name.localeCompare(b.name)));

      return sortedGoods.splice(0, 5);
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(response => response.filter(good => good.color === 'red'));
};
