// eslint-disable-next-line
export const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll().then(data => data.sort((a, b) => a.name.localeCompare(b.name)).splice(0, 5));
};

export const getRedGoods = () => {
  return getAll().then(data => data.filter(good => good.color === 'red'));
};
