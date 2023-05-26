import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((goodA, goodB) => {
      if (goodA.name < goodB.name) {
        return -1;
      }

      if (goodA.name > goodB.name) {
        return 1;
      }

      return 0;
    }).filter((_, index) => index <= 4));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter((obj) => obj.color === 'red'));
};
