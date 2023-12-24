import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch the data.');
  }
}

export async function get5First(): Promise<Good[]> {
  try {
    const goods = await getAll();

    return goods.sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);
  } catch (error) {
    throw new Error('Failed to fetch first five elements.');
  }
}

export async function getRedGoods(): Promise<Good[]> {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (error) {
    throw new Error('Failed to fetch red goods');
  }
}
