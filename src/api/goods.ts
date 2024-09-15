import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => {
    return [...goods]
      .sort((good1, good2) => {
        const { name: name1 } = good1;
        const { name: name2 } = good2;

        return name1.localeCompare(name2);
      })
      .slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    return [...goods].filter(({ color }) => color === 'red');
  }); // get only red
};
