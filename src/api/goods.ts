import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      throw new Error(`Something went wrong: ${error}`);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((firstGood, secondGood) => (
      firstGood.name.localeCompare(secondGood.name))).slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
