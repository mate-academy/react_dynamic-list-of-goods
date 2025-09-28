import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch goods: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    throw new Error(`Network error: ${(err as Error).message}`);
  }
};

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods => {
    const sorted = [...goods].sort((a, b) => a.name.localeCompare(b.name));

    return sorted.slice(0, 5);
  });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(g => g.color === 'red'));
};
