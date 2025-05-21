import { Good } from '../types/Good';
import { ESortType } from '../utils/enums/sortTypes';
import sortGoods from '../utils/sortGoods/sortGoods';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods =>
    sortGoods(goods, ESortType.SORT_BY_CHAR).slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAll().then((goods: Good[]) =>
    goods.filter(({ color }) => color === 'red'),
  );
};
