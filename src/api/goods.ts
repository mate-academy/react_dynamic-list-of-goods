import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  try {
    return fetch(API_URL).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch goods: ${response.statusText}`);
      }

      return response.json();
    });
  } catch (error) {
    return Promise.reject(error);
  }
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedGoods = goods.sort((a, b) => a.name.localeCompare(b.name));

    try {
      return sortedGoods.slice(0, 5);
    } catch (error) {
      return Promise.reject(error);
    }
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    try {
      return goods.filter(good => good.color === 'red');
    } catch (error) {
      return Promise.reject(error);
    }
  }); // get only red
};
