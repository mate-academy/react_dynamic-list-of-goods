import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const wait = (data: Good[], delay: number): Promise<Good[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `${response.status} - ${response.statusText}`,
        );
      }

      return response.json();
    })
    .then(data => wait(data, 1000))
    .catch(error => {
      throw new Error(error);
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => (
      goods
        .sort((good1, good2) => good1.name.localeCompare(good2.name))
        .slice(0, 5)
    ));
};

export const getRed = () => {
  return getAll()
    .then(goods => (
      goods.filter(good => good.color === 'red')
    ));
};
