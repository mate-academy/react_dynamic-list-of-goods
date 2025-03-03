import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function fetchList(url: string) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json();
  });
}

export function getAll(): Promise<Good[]> {
  return fetchList(API_URL);
}

export const get5First = () => {
  return fetchList(API_URL).then(goods => {
    return goods
      .sort((good1: Good, good2: Good) => good1.name.localeCompare(good2.name))
      .slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return fetchList(API_URL).then(goods =>
    goods.filter((good: Good) => good.color === 'red'),
  ); // get onlyg
};
