import { Good } from '../react-app-env';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = async () => {
  const goods5 = await getAll();

  const sorted = goods5.sort((good, good1) => (
    good.name.localeCompare(good1.name)));

  return sorted.slice(0, 4);
};

export const getRedGoods = async () => {
  const goodsRed = await getAll();

  return goodsRed.filter(good => good.color === 'red');
};
