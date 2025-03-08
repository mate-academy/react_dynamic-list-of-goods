import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => [...goods].sort((a, b) => a.name.localeCompare(b.name)))
    .then(sortedGoods => sortedGoods.slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
