/* eslint-disable max-len */
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const redGoods = await getAll();

  return redGoods.filter(good => good.color === 'red');
};
