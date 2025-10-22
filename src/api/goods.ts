import { Good } from '../types/Good';

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to load goods:', error);
    throw error;
  }
}

export async function get5First(): Promise<Good[]> {
  try {
    const goods = await getAll();

    return [...goods]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);
  } catch (error) {
    console.error('Failed to load 5 first goods:', error);
    throw error;
  }
}

export async function getRedGoods(): Promise<Good[]> {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (error) {
    console.error('Failed to load red goods:', error);
    throw error;
  }
}
