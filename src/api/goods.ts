import { Good } from '../types/Good';

function sleeper(ms:number) {
  return (x: Response): Promise<Response> => {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(sleeper(500))
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')); // get only red
};
