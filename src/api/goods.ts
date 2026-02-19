import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      return response.json();
    })
    .catch((err: Error) => {
      throw new Error(`Unable to load goods. ${err.message}`);
    });
}

export const get5First = () => {
  return getAll().then(goods =>
    [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
};

export const getRed = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
