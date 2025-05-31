import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  try {
    return fetch(API_URL).then(response => response.json());
  } catch (e) {
    throw new Error(e.message);
  }
}

export const get5First = () => {
  return getAll().then(goods => {
    const sortedList = goods.sort((good1, good2) =>
      good1.name.localeCompare(good2.name),
    );

    return sortedList.slice(0, 5);
  });
};

export const getRed = () => {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
};
