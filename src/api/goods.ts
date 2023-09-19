import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
}

export const get5First = () => {
  return getAll()
    .then(goods => goods) // sort and get the first 5
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods) // get only red
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(good => good.color === 'red'));
};
