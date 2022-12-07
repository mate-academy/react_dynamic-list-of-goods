import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export function getFirstFive(): Promise<Good[]> {
  return getAll()
    .then(all => all.sort((a, b) => a.name.localeCompare(b.name)))
    .then(five => five.slice(0, 5));
}

export function getAllRed(): Promise<Good[]> {
  return getAll()
    .then(red => red.filter(r => r.color === 'red'));
}
