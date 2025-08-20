import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error('Failed to loads goods');
    }

    return await res.json();
  } catch (error) {
    return [];
  }
}

export const get5First = () => {
  return getAll().then(goods =>
    goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5),
  ); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
