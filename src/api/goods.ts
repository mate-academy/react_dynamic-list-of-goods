import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const copyGoods = [...goods];

      return copyGoods.sort((g1, g2) => {
        return g1.name.localeCompare(g2.name);
      }).slice(0, 5);
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
