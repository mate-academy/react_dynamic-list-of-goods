import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const responce = await fetch(API_URL);

  if (!responce.ok) {
    throw new Error(`${responce.status} - ${responce.statusText}`)
  }

  return responce.json();
};

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods
    .filter((good) => good.color === 'red');
};
