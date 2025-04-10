import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Failed to fetch goods');
  }
}

export const get5First = async () => {
  try {
    const goods = await getAll();

    return [...goods]
      .sort((a, b) => a.name.localeCompare(b.name))

      .slice(0, 5);
  } catch (error) {
    throw new Error('Failed to fetch and sort goods');
  }
};

export const getRedGoods = async () => {
  try {
    const goods = await getAll();

    return goods.filter(g => g.color === 'red');
  } catch (error) {
    throw new Error('Failed to fetch red goods');
  }
};
