import type { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

function normalizeError(e: unknown, fallback = 'Failed to load goods'): Error {
  return e instanceof Error ? e : new Error(fallback);
}

export async function getAll(): Promise<Good[]> {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Failed to load goods (${res.status} ${res.statusText})`);
    }

    const data = (await res.json()) as Good[];
    return data;
  } catch (e) {
    throw normalizeError(e);
  }
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();
  return [...goods]
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();
  return goods.filter(g => g.color?.toLowerCase() === 'red');
};
