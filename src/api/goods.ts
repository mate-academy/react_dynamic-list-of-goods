import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch goods: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  });
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return [...goods]
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
      )
      .slice(0, 5);
  });
};

export const getRed = () => {
  return getAll().then(goods => {
    return goods.filter(g => (g.color || '').trim().toLowerCase() === 'red');
  });
};
