// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(result => result.sort((a: Good, b: Good) => {
      if (a.name > b.name) {
        return 1;
      }

      if (a.name < b.name) {
        return -1;
      }

      return 0;
    }).slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(result => result.filter((a: Good) => a.color === 'red'));
};
