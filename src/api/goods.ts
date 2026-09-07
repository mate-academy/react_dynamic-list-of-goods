import { Good } from '../types/Good';

export function getAll(): Promise<Good[]> {
  return fetch(
    'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  ).then(response => response.json());
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods =>
    [...goods].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
}

export function getRed(): Promise<Good[]> {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
}
