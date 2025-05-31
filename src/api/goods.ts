import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// Generic fetch function with error handling
export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch goods: ${response.statusText}`);
    }

    const goods: Good[] = await response.json();

    return goods;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching goods:', error);
    throw error; // Rethrow the error for further handling
  }
}

// Get the first 5 sorted goods
export async function get5First(): Promise<Good[]> {
  const goods = await getAll();
  const sortedGoods = goods.sort((a, b) => a.name.localeCompare(b.name));

  return sortedGoods.slice(0, 5); // Return the first 5 goods
}

// Get only red-colored goods
export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red'); // Filter goods by color
}
