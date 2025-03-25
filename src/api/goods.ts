import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch goods');
    }

    return response.json();
  });
}

export const get5First = () => {
  return getAll()
    .then(goods =>
      goods.sort((a: Good, b: Good) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        return nameA.localeCompare(nameB);
      }),
    )
    .then(goods => goods.slice(0, 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods =>
    goods.filter(good => {
      const colorGood = good.color.toLowerCase();

      return colorGood === 'red';
    }),
  ); // get only red
};
