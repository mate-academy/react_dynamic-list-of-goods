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

export const get5First = async () => {
  return (await getAll()).sort((a: Good, b: Good) => (
    a.name.localeCompare(b.name)
  )).slice(0, 5);
};

export const getRedGoods = async () => {
  return (await getAll()).filter((good: Good) => good.color === 'red');
};
