import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => error);
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
    )
    .catch(error => error);
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => error);
};
