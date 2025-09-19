import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch goods: ${response.status}`);
  }

  return (await response.json()) as Good[];
}

export const get5First = (): Promise<Good[]> =>
  getAll().then(goods =>
    // evita mutação do array original
    [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );

export const getRedGoods = (): Promise<Good[]> =>
  getAll().then(goods => goods.filter(good => good.color === 'red'));
