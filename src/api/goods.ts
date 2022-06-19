// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = ():Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goodsFromServer => goodsFromServer
      .filter((good: { id: number; }) => good.id <= 5));
};

export const getRedGoods = ():Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goodsFromServer => goodsFromServer
      .filter((good: { color: string; }) => good.color === 'red'));
};
