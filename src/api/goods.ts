import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = () => {
  return getAll()
    .then(goods => [...goods].sort((firstGood, secondGood) => {
      return firstGood.name.localeCompare(secondGood.name);
    }).filter((_, i) => i < 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
