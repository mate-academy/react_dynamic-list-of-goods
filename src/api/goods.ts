import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  // eslint-disable-next-line no-useless-catch
  try {
    const allGoods = await fetch(API_URL);

    if (!allGoods.ok) {
      throw new Error('Cannot fetch goods');
    }

    return await allGoods.json();
  } catch (error) {
    throw error;
  }
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

  return allGoods.filter(({ color }) => color === 'red');
};
