import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch goods: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching goods:', error);

    return [];
  }
}

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5); // sort and get the first 5
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red'); // get only red
};
