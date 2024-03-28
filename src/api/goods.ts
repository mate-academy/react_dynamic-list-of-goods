import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods =>
    goods
      .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
      .slice(0, 5),
  );
};

export const getRed = (): Promise<Good[]> => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
