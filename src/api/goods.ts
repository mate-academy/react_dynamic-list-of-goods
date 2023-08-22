import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5)) // sort and get the first 5
    .catch(error => {
      throw error;
    });
};

export const getRed = () => {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red')) // get only red
    .catch(error => {
      throw error;
    });
};
