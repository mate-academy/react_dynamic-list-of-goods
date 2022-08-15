import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then((response) => response.json());
}

export const get5First = () => {
  return getAll().then((rawGoods) => {
    const preparedGoods = rawGoods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);

    return preparedGoods;
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then((rawGoods) => {
    return rawGoods.filter((good) => good.color === 'red');
  }); // get only red
};
