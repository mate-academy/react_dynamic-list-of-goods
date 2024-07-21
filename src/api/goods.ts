import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // eslint-disable-next-line
      console.log('All goods', data);

      return data;
    });
}

export const get5First = () => {
  return getAll().then(goods => {
    const firstFive = goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5);
    // eslint-disable-next-line
    console.log('first 5 goods:', firstFive);

    return firstFive;
  });
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    const redGoods = goods.filter(good => good.color === 'red');
    // eslint-disable-next-line
    console.log('Red goods:', redGoods);

    return redGoods;
  });
};
