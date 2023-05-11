import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      throw new Error(`Something went wrong ${error}`);
    });
}

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(({ color }) => color === 'red');
};
