import { Good } from '../types/Good';

/* eslint-disable no-console */
// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => {
      const sortedGoods = [...goods].sort((a, b) =>
        a.name.localeCompare(b.name),
      );

      return sortedGoods.slice(0, 5);
    })
    .catch(error => {
      console.error('Fetch error:', error);

      return [];
    }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => {
      const redGoods = goods.filter(good => good.color === 'red');

      return redGoods;
    })
    .catch(error => {
      console.error('Fetch error:', error);

      return [];
    }); // get only red
};
