import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const getFiveFirst = async (): Promise<Good[]> => {
  const all = await getAll();

  return all
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
    .slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const all = await getAll();

  return all.filter(good => good.color === 'red');
};
