import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch goods: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error in getAll:', error);

    return [];
  }
}

export const get5First = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();

    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  } catch (error) {
    console.error('Error in get5First:', error);

    return [];
  }
};

export const getRedGoods = async (): Promise<Good[]> => {
  try {
    const goods = await getAll();

    return goods.filter(item => item.color === 'red');
  } catch (error) {
    console.error('Error in getRedGoods:', error);

    return [];
  }
};
