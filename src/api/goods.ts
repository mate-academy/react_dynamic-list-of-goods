import { Good } from '../types/Good';

const GOODS_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

async function fetchAllGoods(): Promise<Good[]> {
  try {
    const res = await fetch(GOODS_URL);

    if (!res.ok) {
      throw new Error(`Failed to load goods: ${res.status} ${res.statusText}`);
    }

    let data: unknown;

    try {
      data = await res.json();
    } catch {
      throw new Error('Failed to parse goods JSON response');
    }

    if (!Array.isArray(data)) {
      throw new Error('Invalid goods response: expected an array');
    }

    // optional normalization/defensive typing
    return data as Good[];
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to fetch goods: ${message}`);
  }
}

export async function loadAllGoods(): Promise<Good[]> {
  return fetchAllGoods();
}

export async function loadFirst5Goods(): Promise<Good[]> {
  const goods = await fetchAllGoods();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
}

export async function loadRedGoods(): Promise<Good[]> {
  const goods = await fetchAllGoods();

  return goods.filter(g => g.color.toLowerCase() === 'red');
}
