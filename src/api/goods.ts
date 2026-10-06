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
    .catch(error => {
      console.error('Failed to fetch goods:', error);
      throw error;
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => [...goods].sort((a: Good, b: Good) => a.name.localeCompare(b.name)).slice(0, 5))
    .catch(error => {
      console.error('Failed to fetch first 5 goods:', error);
      throw error;
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => {
      console.error('Failed to fetch red goods:', error);
      throw error;
    });
};
