import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(
          `${response.status} - ${response.text}`,
        );
      }

      if (!response.headers.get('content-type')?.includes('application/json')) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(
          'Content-type is not supported',
        );
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((prev, next) => (
      prev.name.localeCompare(next.name)
    )).slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => {
      return good.color === 'red';
    }));
};
