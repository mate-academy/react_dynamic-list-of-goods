import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => [...goods]
      .sort((previousGood, currentGood) => {
        return previousGood.name.localeCompare(currentGood.name);
      })
      .slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
