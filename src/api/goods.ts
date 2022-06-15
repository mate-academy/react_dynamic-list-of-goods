import { Good } from '../react-app-env';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5Goods = (num:number): Promise<Good[]> => {
  return getAllGoods()
    // eslint-disable-next-line max-len
    .then(result => result.sort((firstGood, secondGood) => firstGood.name.localeCompare(secondGood.name)))
    .then(result => result.slice(0, num));
};

export const getRedGoods = (color: string): Promise<Good[]> => {
  return getAllGoods()
    .then(result => result.filter((good:Good) => good.color === color));
};
