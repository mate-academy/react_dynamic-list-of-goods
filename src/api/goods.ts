import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        return [];
      }

      return response.json();
    })
    .catch(err => {
      throw new Error(`Error: ${err}`);
    });
}

export const get5First = () => {
  return getAll().then(goods => {
    return goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((_good, index) => index < 5);
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
