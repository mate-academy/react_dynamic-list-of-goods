import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export async function getFirst5() {
  return getAll()
    .then(goods => goods
      .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
      .slice(0, 5));
}

export async function getRed() {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
}
