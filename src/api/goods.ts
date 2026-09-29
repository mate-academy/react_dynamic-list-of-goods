import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    // Copy the array to avoid mutating the original, sort by name, and slice the first 5
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    // Filter goods where color is 'red'
    return goods.filter(good => good.color === 'red');
  });
};
