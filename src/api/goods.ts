// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export function get5First(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => response.slice(0, 5));
};

export function getRedGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json())
    .then(response => response.filter((good: Good) => {
      return good.color === 'red'
    }));
};
