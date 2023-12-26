import { Good } from '../../src/types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods); // get only red
};
