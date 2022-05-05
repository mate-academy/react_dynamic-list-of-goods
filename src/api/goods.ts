import { Good } from '../react-app-env';

// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll().then(response => response
    .sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(response => response
      .filter(good => good.color === 'red'));
};
