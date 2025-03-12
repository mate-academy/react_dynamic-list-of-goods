import { Good } from '../types/Good';

const BASE_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await fetch(BASE_URL);

  return response.json();
};

export const getFiveFirstGoods = async (): Promise<Good[]> => {
  const goods = await getAllGoods();

  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAllGoods();

  return goods.filter(good => good.color === 'red');
};
