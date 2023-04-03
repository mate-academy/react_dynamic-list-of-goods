import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async (): Promise<Good[]> => {
  const allGoods = await getAll();
  const sortedGoods = allGoods.sort((prevGood, currentGood) => (
    prevGood.name.localeCompare(currentGood.name)));

  return sortedGoods.slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
