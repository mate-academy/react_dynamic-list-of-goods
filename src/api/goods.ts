import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(() => {
      throw new Error('Try to reload later');
    });
}

export function get5First(): Promise<Good[]> {
  return getAll()
    .then(goods => (
      goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5)
    ));
}

export function getRedGoods(): Promise<Good[]> {
  return getAll()
    .then(goods => (
      goods
        .filter((good: Good) => good.color === 'red')
    ));
}
