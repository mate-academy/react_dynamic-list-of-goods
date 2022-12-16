import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const loadedGoods = await getAll()
    .then(goods => goods);

  loadedGoods.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });

  return loadedGoods.slice(0, 5);
};

export const getRedGoods = async () => {
  const loadedGoods = await getAll()
    .then(goods => goods);

  return loadedGoods.filter(a => a.color === 'red');
};
