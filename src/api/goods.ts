import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Failed to load goods');
    }

    return response.json();
  });
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
