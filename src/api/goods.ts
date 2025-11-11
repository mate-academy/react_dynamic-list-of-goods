import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to load goods');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Network error: cannot load goods');
  }
}

export const get5First = async () => {
  try {
    const goods = await getAll();

    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  } catch (error) {
    throw error;
  }
};

export const getRedGoods = async () => {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (error) {
    throw error;
  }
};
