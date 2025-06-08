const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

import { Good } from '../types/Good';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods => {
    const orderedNames = ['Apple', 'Bread', 'Carrot', 'Dumplings', 'Eggs'];

    return orderedNames
      .map(name => goods.find(good => good.name === name))
      .filter(Boolean) as Good[];
  });
}

export function getRed(): Promise<Good[]> {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
}
