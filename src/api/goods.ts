// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => json);
}

export const get5First = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => json.filter((el: { id: number; }) => el.id <= 5));
};

export const getRedGoods = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => json.filter((el: { color: string; }) => el.color === 'red'));
};
