import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then((goods: Good[]) => goods);
}

export const get5First = (): Promise<Good[]> => {
  return getAll().then(goods =>
    goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5),
  ); //  sort and get the first 5
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  }); // get only red
};
