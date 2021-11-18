import { Good } from '../types/Types';

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = async () => {
  const response = await fetch(API_URL);

  const goods: Good[] = await response.json();

  return goods;
};

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((g1, g2) => g1.name.localeCompare(g2.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
