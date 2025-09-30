import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Something went wrong... ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

export const get5First = async () => {
  const goods = await getAll();
  return [...goods]
    .sort((firstGood: Good, secondGood: Good) => {
      return firstGood.name.localeCompare(secondGood.name);
    })
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();
  return [...goods].filter((good: Good) => good.color === 'red');
};
