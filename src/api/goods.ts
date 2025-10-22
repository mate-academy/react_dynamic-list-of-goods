import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load goods: ${response.status}`);
    }

    return response.json();
  });
}

export const getFirstFiveGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    const sortedGoods = [...goods].sort((a, b) => {
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });

    return sortedGoods.slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
