import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const allGoods = await fetch(API_URL);

  if (!allGoods.ok) {
    throw new Error('Cannot fetch goods');
  }

  return allGoods.json();
}

export const get5First = async () => {
  const allGoods = await getAll();

  return allGoods
    .sort((firstGood, secondGood) => (
      firstGood.name.localeCompare(secondGood.name)))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAll();

  return allGoods.filter((good) => good.color === 'red');
};
