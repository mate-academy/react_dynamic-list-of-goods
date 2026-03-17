import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

async function request(): Promise<Good[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to load goods');
  }

  return response.json();
}

export const getAll = (): Promise<Good[]> => {
  return request();
};

export const get5First = async (): Promise<Good[]> => {
  const goods = await request();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await request();

  return goods.filter(good => good.color === 'red');
};
