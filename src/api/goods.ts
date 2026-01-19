import { Good } from '../types/Good';
const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export function getFirstFive(): Promise<Good[]> {
  return getAll().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
}

export function getRedGoods(): Promise<Good[]> {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
}
