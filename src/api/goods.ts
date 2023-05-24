/* eslint-disable no-console */
import { Good } from '../types/Good';

const API_URL
= 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log(error);

      return [];
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5))
    .catch(error => {
      console.log(error);

      return [];
    });
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(error => {
      console.log(error);

      return [];
    });
};
