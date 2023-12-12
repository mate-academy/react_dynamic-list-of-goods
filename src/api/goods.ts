import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (limit: number) => {
  return getAll()
    .then(goods => goods.sort((a, b) => (a.name).localeCompare(b.name))
      .slice(0, limit));
};

export const getRedGoods = (color: string) => {
  return getAll()
    .then(goods => goods.filter(good => good.color === color));
};
