import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll():Promise<Good[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    return Promise.reject(new Error('Can`t load Goods'));
  }

  return response.json();
}

export const get5First = async () => {
  const goods = await getAll();

  return (
    [...goods]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5)
  );
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red'); // get only red
};
