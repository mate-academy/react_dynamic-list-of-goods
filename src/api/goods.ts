import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const getSomeGoods = (numOfGoods: number): Promise<Good[]> => {
  return getAll()
    .then(goods => goods
      .sort((good, nextGood) => good.name.localeCompare(nextGood.name))
      .splice(0, numOfGoods));
};

export const getGoodsSortedByColor = (color: string) => {
  return getAll()
    .then(goods => goods.filter(good => good.color === color));
};
