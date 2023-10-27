import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(url = ''): Promise<Good[]> {
  return fetch(API_URL + url)
    .then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods)
    .then(goods => goods.sort((a, b) => a.name.localeCompare(b.name)))
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods)
    .then(goods => goods.filter(good => good.color === 'red'));
};
