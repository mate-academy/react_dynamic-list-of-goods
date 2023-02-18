import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter((good) => good.color === 'red');
};
