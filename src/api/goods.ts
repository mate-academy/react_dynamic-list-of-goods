import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods =>
    goods
      .sort((good1: Good, good2: Good) => {
        const good1Name = good1.name.toLowerCase();
        const good2Name = good2.name.toLowerCase();

        return good1Name.localeCompare(good2Name);
      })
      .slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red')); // get only red
};
