import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a: Good, b: Good) => a.name.localeCompare(b.name)).slice(0, 5));
};

export const getRed = () => {
  return getAll()
    .then(goods => goods
      .filter(({ color }) => color === 'red'));
};
