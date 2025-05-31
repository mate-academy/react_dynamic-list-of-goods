import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`Invalid url ${API_URL}`);
  }).catch(() => {
    throw new Error('something wrong has happened')
  });
}

export const get5First = () => {
  return getAll().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  ).catch(() => {
    throw new Error('Error occured loading 5 first goods')
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll()
  .then(goods => goods.filter(good => good.color === 'red'))
  .catch(() => {
    throw new Error('Error occured loading red goods')
  }); // get only red
};
