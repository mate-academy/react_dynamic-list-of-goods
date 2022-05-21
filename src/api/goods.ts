// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async (): Promise<Good[]> => {
  const allgoods = await fetch(API_URL)
    .then(response => response.json());

  return allgoods.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const allgoods = await fetch(API_URL)
    .then(response => response.json());

  return allgoods.filter((good: { color: string; }) => good.color === 'red');
};
