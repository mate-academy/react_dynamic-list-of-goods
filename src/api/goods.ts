import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error('Request failed: ' + res.status);
  }

  const data = await res.json();

  await new Promise(resolve => setTimeout(resolve, 1000));

  return data;
}

export const get5First = () => {
  return getAll().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  ); // sort and get the first 5
};

export const getRed = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
