import type { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return (await response.json()) as Good[];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load goods: ${error.message}`);
    }

    throw new Error('Failed to load goods');
  }
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods =>
    [...goods]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5),
  );
}

export function getRedGoods(): Promise<Good[]> {
  return getAll().then(goods =>
    goods.filter(good => good.color === 'red'),
  );
}
