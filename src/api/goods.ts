import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => {
      throw new Error(error);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort(
      (presentGood, nextGood) => presentGood.name.localeCompare(nextGood.name),
    ).slice(0, 5)); // sort and get the first 5
};

export const getRed = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
