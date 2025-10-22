import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch goods: ${response.status} ${response.statusText}`,
    );
  }

  const goods: Good[] = await response.json();

  return goods;
}

export const get5First = () => {
  return getAll().then(goods => {
    return goods
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
