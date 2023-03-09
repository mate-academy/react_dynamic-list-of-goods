import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[] | void> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }

      return response.json();
    })
    .then(result => result)
    .catch(error => error);
}

export const get5First = (): Promise<Good[] | void> => {
  return getAll()
    .then(goods => {
      if (!goods) {
        return Promise.reject(goods);
      }

      return goods.sort().slice(0, 4);
    })
    .then(result => result)
    .catch(error => error);
};

export const getRed = () => {
  return getAll()
    .then(goods => {
      if (!goods) {
        return Promise.reject(goods);
      }

      return goods.filter(good => good.color === 'red');
    })
    .then(result => result)
    .catch(error => error);
};
