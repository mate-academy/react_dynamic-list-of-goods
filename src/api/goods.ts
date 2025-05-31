import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    const sorted = goods.sort((a, b) => a.name.localeCompare(b.name));

    return sorted.slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    const redGoods = goods.filter(good => good.color === 'red');

    return redGoods;
  });
};
