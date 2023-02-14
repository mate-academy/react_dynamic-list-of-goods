import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}. Goods can not be loaded`);
      }

      return response.json();
    });
}

export const get5First = async () => {
  const goods5First = await getAll();

  return goods5First
    .sort((a, b) => (a.name.localeCompare(b.name)))
    .slice(0, 5);// sort and get the first 5
};

export const getRedGoods = async () => {
  const goodsRed = await getAll();

  return goodsRed.filter(good => good.color === 'red'); // get only red
};
