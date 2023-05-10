import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.ok
    ? response.json()
    : Promise.reject(new Error('Server is not answering, Please try later'));
}

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(({ color }) => color === 'red');
};
