import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return `${response.status} - ${response.statusText}`;
    })
    .then(goods => goods)
    .catch(error => {
      throw new Error(error);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => (
      goods
        .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
        .slice(0, 5)
    ))
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
