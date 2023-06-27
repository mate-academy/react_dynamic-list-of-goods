import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const response = await getAll();

  response.sort((a, b) => a.name.localeCompare(b.name));

  return response.slice(0, 5); // sort and get the first 5
};

export const getRedGoods = async () => {
  const response = await getAll();

  return response.filter(item => item.color === 'red'); // sort and get the first 5
};
