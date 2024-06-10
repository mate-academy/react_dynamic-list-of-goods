import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  });
}

export function get5First(): Promise<Good[]> {
  return getAll().then(goods => {
    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  });
} // sort and get the first 5

export function getRedGoods(): Promise<Good[]> {
  return getAll().then(allGoods => {
    return allGoods.filter(good => good.color === 'red');
  });
} // get only red
