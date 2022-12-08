import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async () => {
  const response = await getAll();

  return response.sort((good, nextGoods) => (
    good.name.localeCompare(nextGoods.name)
  )).slice(0, 5);
};

export const getRedGoods = async () => {
  const response = await getAll();

  return response.filter(goods => goods.color === 'red');
};
