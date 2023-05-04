import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => (response.ok
      ? response.json()
      : Promise.reject(new Error(`${response.status}: ${response.statusText}`))
    ));
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((goodA, goodB) => (
      goodA.name.localeCompare(goodB.name)
    )))
    .then(sortGoods => sortGoods.slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
