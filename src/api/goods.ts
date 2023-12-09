import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(good => good);
}

export const get5First = () => {
  return getAll()
    .then(good => good.sort((a:Good, b:Good) => a.name.localeCompare(b.name))
      .slice(0, 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(good => good.filter(item => item.color === 'red')); // get only red
};
