import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const GoodsFromServer = await fetch(API_URL);

  return GoodsFromServer.json();
}

export const get5First = async () => {
  const goodsFromServer = await getAll();

  return goodsFromServer.sort((prev, curr) => (
    prev.name.localeCompare(curr.name)
  ))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goodsFromServer = await getAll();

  return goodsFromServer.filter(({ color }) => color === 'red');
};
