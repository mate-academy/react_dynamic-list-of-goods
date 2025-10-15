import { Good } from '../types/Good';


const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';


async function request<T>(signal?: AbortSignal): Promise<T> {
  const res = await fetch(API_URL, { signal });

  if (!res.ok) {
    throw new Error(`Failed to load goods (status ${res.status})`);
  }

  return res.json();
}

export async function getAllGoods(signal?: AbortSignal): Promise<Good[]> {
  return request<Good[]>(signal);
}

export async function getFirstFiveSortedByName(
  signal?: AbortSignal,
): Promise<Good[]> {
  const goods = await request<Good[]>(signal);

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
}

export async function getRedGoods(signal?: AbortSignal): Promise<Good[]> {
  const goods = await request<Good[]>(signal);

  return goods.filter(g => g.color === 'red');
}
