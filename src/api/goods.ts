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

export const get5First = async () => {
  const response = await getAll();

  return response
    .sort((firstGood, secondGood) => (
      firstGood.name.localeCompare(secondGood.name)))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const response = await getAll();

  return response.filter(({ color }) => color === 'red');
};
