import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}  ${response.statusText}`);
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    if (!goods) {
      throw new Error(`Somthing went wrong ${goods}`);
    }

    goods.sort((goodA, goodB) => goodA.name.localeCompare(goodB.name));

    return goods.slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    if (!goods) {
      throw new Error(`Somthing went wrong ${goods}`);
    }

    return goods.filter(good => good.color === 'red');
  }); // get only red
};
