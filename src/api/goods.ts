import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAllGoods(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const getFirstFiveGoods = async () => {
  const goods = await getAllGoods();

  goods.sort(({ name: nameA }, { name: nameB }) => (
    nameA.localeCompare(nameB)
  ));

  return goods.slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAllGoods();

  return goods.filter(({ color }) => color === 'red');
};
