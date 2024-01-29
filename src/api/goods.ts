import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const goodsCopy = [...goods];

      goodsCopy.sort((g1, g2) => g1.name.localeCompare(g2.name));
      goodsCopy.length = 5;

      return goodsCopy;
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(g => g.color === 'red')); // get only red
};
