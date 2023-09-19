/* eslint-disable padding-line-between-statements */
import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
// eslint-disable-next-line padded-blocks
export function getAll(): Promise<Good[]> {

  return fetch(API_URL).then((res) => res.json());
}

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((a, b) => a.name
      .localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter((good) => good.color === 'red');
};
