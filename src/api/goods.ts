import { Good } from '../types/Good';
import { filteredByColor, firstSortedFive } from '../helpers';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(firstSortedFive);
};

export const getRedGoods = () => {
  return getAll()
    .then(filteredByColor);
};
