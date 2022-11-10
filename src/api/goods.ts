import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const list = await getAll();

  return list.sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const list = await getAll();

  return list.filter(good => good.color === 'red');
};
