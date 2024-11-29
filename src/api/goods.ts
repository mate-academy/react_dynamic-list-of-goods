import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export function getAllGoods(): Promise<Good[]> {
  return getAll().then(response => response);
}

export const get5FirstGoods = () => {
  return getAll().then(goods =>
    goods
      .sort((good1, good2) => {
        return good1.name.localeCompare(good2.name);
      })
      .slice(0, 5),
  ); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
