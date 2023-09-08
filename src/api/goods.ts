import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((_, index) => index >= 0 && index < 5)); // sort and get the first 5
};

export const getRed = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
