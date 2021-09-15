// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async (): Promise<Good[]> => {
  const firstFive = (await getAll()).slice(0, 5);

  return firstFive;
};

export const getRedGoods = async (): Promise<Good[]> => {
  const redGoods = (await getAll()).filter(good => good.color === 'red');

  return redGoods;
};
