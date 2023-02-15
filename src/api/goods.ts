import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json1`;

export const getAll = async (): Promise<Good[]> => {
  const result = await fetch(API_URL)
    .then(response => response.json());

  return result;
};

export const get5First = async () => {
  const result = await getAll();

  return result.sort((prev, next) => (
    prev.name.localeCompare(next.name)))
    .slice(0, 6);
};

export const getRedGoods = async () => {
  const result = await getAll();

  return result.filter(good => good.color === 'red');
};
