import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} status code`);
      }

      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}

export function get5First(): Promise<Good[]> {
  return getAll().then((goods) => {
    return [...goods]
      .sort((g1, g2) => g1.name.localeCompare(g2.name))
      .slice(0, 5);
  });
}

export function getRedGoods(): Promise<Good[]> {
  return getAll().then((goods) => {
    return goods.filter((good) => good.color === 'red');
  });
}
