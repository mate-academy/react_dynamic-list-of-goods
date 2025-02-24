/* eslint-disable no-console */
import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    })
    .then(data => {
      console.log('Fetched goods:', data);

      return data;
    })
    .catch(error => {
      console.error('Error fetching goods:', error);

      return [];
    });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    )
    .then(sortedGoods => sortedGoods.slice(0, 5));
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
