import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// All goods
export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then((goods: Good[]) => {
      return goods;
    });
}

// sort and get the first 5
export function get5First(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then((goods: Good[]) => {
      return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
    });
}

// get only red
export function getRedGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then((goods: Good[]) => {
      return goods.filter(good => good.color === 'red');
    });
}
