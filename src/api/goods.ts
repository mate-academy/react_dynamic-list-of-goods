import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const allGoods = await getAll();

  return allGoods
    .sort((goodOne, goodTwo) => (goodOne.name.localeCompare(goodTwo.name)))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAll();

  return allGoods.filter(({ color }) => color === 'red');
};
