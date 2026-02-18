// src/api/goods.ts
import type { Good } from '../types/Good';
import { client } from './client'; // or whatever your project uses for fetch

// Server endpoint returns ALL goods
export function getGoods(): Promise<Good[]> {
  return client.get<Good[]>('/goods');
}

export async function getAllGoods(): Promise<Good[]> {
  return getGoods();
}

export async function getFirst5GoodsSortedByName(): Promise<Good[]> {
  const goods = await getGoods();

  return [...goods]
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getGoods();

  return goods.filter(good => good.color === 'red');
}
