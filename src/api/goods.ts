// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = async () => {
  const goods = await getAll();

  return goods.slice(0, 5);
};

export const getRed = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
