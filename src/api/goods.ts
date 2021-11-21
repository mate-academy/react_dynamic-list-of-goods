import { Good } from '../react-app-env';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = () => {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const getAll = (): Promise<Good[] | []> => request();

export const get5First = (): Promise<Good[] | []> => {
  return getAll()
    .then((goods: Good[]) => {
      const result = [...goods];

      result.sort((good1, good2) => good1.name.localeCompare(good2.name));

      return result.slice(0, 5);
    });
};

export const getRedGoods = (): Promise<Good[] | []> => {
  return getAll()
    .then((goods: Good[]) => {
      return goods.filter(good => good.color === 'red');
    });
};
