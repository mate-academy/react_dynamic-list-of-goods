import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Error fetching goods:', error);

      return [];
    });
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods => {
    goods.sort((a, b) => a.name.localeCompare(b.name));

    return goods.slice(0, 5);
  });
}

export function getRedGoods(): Promise<Good[]> {
  return getAll().then(goods => {
    return goods.filter(good => good.color.toLowerCase() === 'red');
  });
}
