/* eslint-disable no-console */
// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = async (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name)).splice(0, 5));
};

export const getRedGoods = async (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name)).filter((product: Good) => product.color === 'red'));
};
