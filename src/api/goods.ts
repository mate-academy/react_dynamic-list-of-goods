import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getData<T>(): Promise<T> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = () => {
  return getData<Good[]>()
    .then(goods => goods
      .sort((g1, g2) => g1.name.localeCompare(g2.name))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getData<Good[]>()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};

export const getAll = () => {
  return getData<Good[]>()
    .then(goods => goods);
};
