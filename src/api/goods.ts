import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(url = API_URL): Promise<Good[]> {
  return fetch(url)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      return goods
        .sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
        .splice(0, 5);
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      return goods.filter(good => good.color === 'red');
    }); // get only red
};
