import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedGoods = goods.sort((good1, good2) => {
      return good1.name.localeCompare(good2.name);
    });

    const firstFive = sortedGoods.slice(0, 5);

    return firstFive;
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
