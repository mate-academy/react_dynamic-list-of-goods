import { Dispatch } from 'react';
import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch();
}

export const get5First = (setGoods: Dispatch<Good[]>) => {
  return getAll().then(goods =>
    setGoods(
      goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5),
    ),
  );
};

export const getRedGoods = (setGoods: Dispatch<Good[]>) => {
  return getAll().then(goods =>
    setGoods(goods.filter(good => good.color === 'red')),
  );
};
