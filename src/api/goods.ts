import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch goods: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (err) {
    const message = (err as Error)?.message || String(err);

    throw new Error('Failed to fetch goods: ' + message);
  }
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods => {
    return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  }); // sort and get the first 5
}

export function getRedGoods(): Promise<Good[]> {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  }); // get only red
}
