import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function get5First(): Promise<Good[]> {
  try {
    const goods = await getAll();

    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  } catch (error) {
    throw error;
  }
}

export async function getRedGoods(): Promise<Good[]> {
  try {
    const goods = await getAll();

    return goods.filter(good => good.color === 'red');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching red goods:', error);
    throw error;
  }
}
