import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((good1, good2) => (good1.name).localeCompare(good2.name))
      .slice(0, 5));
};

export const getRed = () => {
  return getAll()
    .then(goods => goods
      .filter(good => good.color === 'red'));
};
