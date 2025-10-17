import type { Good } from '../types/Good';

const BASE_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

async function request<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to load: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export const getAllGoods = (): Promise<Good[]> => request<Good[]>(BASE_URL);

export const getFirstFiveGoods = async (): Promise<Good[]> => {
  const allGoods = await getAllGoods();

  return [...allGoods]
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
    )
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const allGoods = await getAllGoods();

  return allGoods.filter(good => good.color.toLowerCase() === 'red');
};
