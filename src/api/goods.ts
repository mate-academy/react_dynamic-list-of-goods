import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedGoods = goods.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    const firstFive = sortedGoods.filter((good, index) => {
      if (index < 5) {
        return good;
      }

      return null;
    });

    return firstFive;
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods =>
    goods.filter(good => {
      if (good.color === 'red') {
        return good;
      }

      return null;
    }),
  );
};
