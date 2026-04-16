import { Good } from '../types/Good';

export const getAll = async (): Promise<Good[]> => {
  try {
    const response = await fetch(
      '/react_dynamic-list-of-goods/goods.json'
    );

    if (!response.ok) {
      throw new Error('Failed to load goods');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(g => g.color === 'red');
};
