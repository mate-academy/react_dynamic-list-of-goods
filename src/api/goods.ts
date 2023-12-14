import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

const sortAndSlice = (items: Good[]) => {
  const sorted = items.sort((a, b) => a.name.localeCompare(b.name));

  return sorted.slice(0, 5);
};

const onlyRedGoods = (items: Good[]) => {
  return items.filter((item) => item.color === 'red');
};

export const get5First = () => {
  return getAll()
    .then(goods => sortAndSlice(goods)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => onlyRedGoods(goods)); // get only red
};
