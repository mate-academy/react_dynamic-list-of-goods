import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to load goods');
  }

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll(); // sort and get the first 5

  return goods.toSorted((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll(); // get only red

  return goods.filter(good => good.color.toLowerCase() === 'red');
};
