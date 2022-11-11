import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const goodsFromApi = await fetch(API_URL);

  return goodsFromApi.json();
}

export const get5First = async () => {
  const goodsFromApi = await getAll();

  return goodsFromApi.sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goodsFromApi = await getAll();

  return goodsFromApi.filter(good => good.color === 'red');
};
