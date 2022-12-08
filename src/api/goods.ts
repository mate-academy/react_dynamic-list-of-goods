import { Good } from '../types/Good';

// eslint-disable-next-line max-len
const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAllGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5FirstGoods = () => {
  return getAllGoods()
    .then(goods => goods
      .sort((good1, good2) => (
        good1.name.localeCompare(good2.name)
      ))
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAllGoods()
    .then(goods => goods.filter(good => (
      good.color === 'red'
    )));
};
