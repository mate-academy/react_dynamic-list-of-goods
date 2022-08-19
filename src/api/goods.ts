import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => [...goods]
      .sort((itemA, itemB) => itemA.name.localeCompare(itemB.name))
      .filter((_, index) => index < 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(item => item.color === 'red'));
};
