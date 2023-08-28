import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate.academy/students-api/goods`;

export function getAll(url = ''): Promise<Good[]> {
  return fetch(API_URL + url)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((good1, good2) => {
        return good1.name.localeCompare(good2.name);
      })
      .slice(0, 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll('?color=red')
    .then(goods => goods); // get only red
};
