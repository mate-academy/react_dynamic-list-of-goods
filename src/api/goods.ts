import { Good } from '../types/Good';

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(
    'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch goods');
  }

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods
    .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter((good: Good) => good.color === 'red');
};
