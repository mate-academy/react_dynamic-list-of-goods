import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedGoods = goods.sort((good1, good2) => {
      const normGood1 = good1.name.toLowerCase();
      const normGood2 = good2.name.toLowerCase();

      return normGood1.localeCompare(normGood2);
    });

    return sortedGoods.slice(0, 5);
  });
};

export const getRed = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
