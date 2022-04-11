// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function request(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const getAll = () => {
  return request();
};

export const get5First = () => {
  return request();
};

export const getRedGoods = () => {
  return request();
};
