import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => {
    // Sort goods by name alphabetically
    const sortedGoods = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    // Return only the first 5 items
    return sortedGoods.slice(0, 5);
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    // Filter to keep only red goods
    return goods.filter(good => good.color === 'red');
  });
};
