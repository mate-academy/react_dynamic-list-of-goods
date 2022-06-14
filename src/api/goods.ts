/* eslint-disable max-len */
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const goods = await getAll();

  return goods.splice(5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
