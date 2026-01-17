import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load data. Status: ${response.status}`);
  }

  return response.json();
}

export function getAll(): Promise<Good[]> {
  return request<Good[]>(API_URL);
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
