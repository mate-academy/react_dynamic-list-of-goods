import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods =>
    goods.sort(({ name: a }, { name: b }) => a.localeCompare(b)).slice(0, 5),
  ); // sort and get the first 5
};

export const getRed = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
