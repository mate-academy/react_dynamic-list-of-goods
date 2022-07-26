import { Good } from '../types/Good';

// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort(
      (goodA, goodB) => goodA.name.localeCompare(goodB.name),
    ).slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
};
