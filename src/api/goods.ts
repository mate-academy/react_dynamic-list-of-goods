import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const goods = await response.json();
  return goods;
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();
  return goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();
  return goods.filter(good => good.color === 'red'); // get only red
};
