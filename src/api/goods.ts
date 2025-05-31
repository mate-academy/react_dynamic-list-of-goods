/* eslint-disable no-console */
import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .catch(error => {
      console.error('Fetch failed:', error);

      return [];
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const firstFiveGoods = goods
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5);

      return firstFiveGoods;
    })
    .catch(error => {
      console.error('Fetch failed:', error);

      return [];
    });
};

export const getRed = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods.filter(good => good.color === 'red');

      return redGoods;
    })
    .catch(error => {
      console.error('Fetch failed:', error);

      return [];
    });
};
