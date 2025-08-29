import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to load goods: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Re-throw with context for better error handling
    if (error instanceof Error) {
      throw new Error(`Error fetching goods: ${error.message}`);
    }

    throw new Error('Unknown error occurred when fetching goods');
  }
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  // Sort goods by name alphabetically
  const sortedGoods = [...goods].sort((a, b) => a.name.localeCompare(b.name));

  // Return only the first 5 items
  return sortedGoods.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  // Filter only the red goods
  return goods.filter(good => good.color === 'red');
};
