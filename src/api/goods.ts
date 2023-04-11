import { first5Goods, onlyRedGoods } from '../helpers';
import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => first5Goods([...goods]));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => onlyRedGoods(goods));
};
