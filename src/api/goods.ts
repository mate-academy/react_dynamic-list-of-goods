import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to load goods. Status: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(
      'Failed to load goods: ' +
        (err instanceof Error ? err.message : String(err)),
    );
  }
}

export async function get5First(): Promise<Good[]> {
  const goods = await getAll();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
}
