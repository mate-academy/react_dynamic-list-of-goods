import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch goods: ${response.status}`);
    }

    const goods: Good[] = await response.json();

    return goods;
  } catch (error) {
    throw new Error(`Failed to fetch goods: ${(error as Error).message}`);
  }
}

export async function get5First(): Promise<Good[]> {
  const goods = await getAll();

  return goods.slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
}
