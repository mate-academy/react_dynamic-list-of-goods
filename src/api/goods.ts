import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  });
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then((goods: Good[]) => {
    return goods
      .sort((good1: Good, good2: Good) => good1.name.localeCompare(good2.name))
      .slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then((goods: Good[]) => {
    return goods.filter((good: Good) => good.color === 'red');
  }); // get only red
};
