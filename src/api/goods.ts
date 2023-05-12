import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  try {
    return fetch(API_URL)
      .then(response => response.json());
  } catch {
    throw new Error('Invalid answer from server');
  }
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((prevGood, nextGood) => prevGood.name.localeCompare(nextGood.name))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
