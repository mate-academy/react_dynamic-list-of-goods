// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};
