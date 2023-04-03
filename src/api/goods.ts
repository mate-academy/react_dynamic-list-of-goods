import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getAll(): Promise<Good[]> {
  await wait(300);

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => [...goods]
      .sort((previousGood, currentGood) => {
        return previousGood.name.localeCompare(currentGood.name);
      })
      .slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(({ color }) => color === 'red'));
};
