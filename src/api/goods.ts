import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(err => err);
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods
        .sort((good1, good2) => good1.name.localeCompare(good2.name))
        .slice(0, 5),
    )
    .catch(err => err); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'))
    .catch(err => err); // get only red
};
