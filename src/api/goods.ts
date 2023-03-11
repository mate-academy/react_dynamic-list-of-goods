import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          new Error(`${response.status} - ${response.statusText}`),
        );
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        return Promise.reject(
          new Error('Content type is not supported'),
        );
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      return goods
        .sort((g1, g2) => g1.name.localeCompare(g2.name))
        .slice(0, 5);
    });
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      return goods
        .filter(good => good.color === 'red');
    });
};
