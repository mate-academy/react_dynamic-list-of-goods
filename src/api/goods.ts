import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => (
  (await getAll())
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5)
);

export const getRedGoods = async (): Promise<Good[]> => (
  (await getAll()).filter(good => good.color === 'red')
);
