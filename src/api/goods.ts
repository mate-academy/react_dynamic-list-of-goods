// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => {
      return goods.sort((g1: Good, g2: Good) => g1.name.localeCompare(g2.name)).slice(0, 5);
    });
};

export const getRedGoods = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => {
      return goods.filter((good: Good) => good.color === 'red');
    });
};
