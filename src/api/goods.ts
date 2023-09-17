import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  function sortGoods(goods: Good[]) {
    return goods.sort((good1: Good, good2: Good) => good1.name
      .localeCompare(good2.name));
  }

  return getAll()
    .then(goods => sortGoods(goods)); // sort and get the first 5
};

export const getRedGoods = () => {
  function filterByColor(goods: Good[]) {
    return goods.filter((good: Good) => good.color === 'red');
  }

  return getAll()
    .then(goods => filterByColor(goods)); // get only red
};
