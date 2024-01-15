import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods);
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const sortedGoods = goods
        .sort((good1, good2) => good1.name.localeCompare(good2.name));

      return sortedGoods.slice(0, 5);
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods.filter(g => g.color === 'red');

      return redGoods;
    }); // get only red
};
