import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    // Inclui status e statusText pra facilitar debug
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  try {
    return await res.json();
  } catch {
    throw new Error('Failed to parse server response (invalid JSON).');
  }
}

export async function getAll(): Promise<Good[]> {
  return fetchJson<Good[]>(API_URL);
}

export async function get5First(): Promise<Good[]> {
  const goods = await getAll();

  const sorted = [...goods].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
  );

  return sorted.slice(0, 5);
}

export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAll();

  return goods.filter(g => g.color === 'red');
}
