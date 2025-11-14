import { Good } from '../types/Good';
import { LoadFunction } from '../types/LoadFunction';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch goods');
    }

    return response.json();
  });
}

export const get5First: LoadFunction = () => {
  return getAll().then(goods => {
    return goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods: LoadFunction = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
