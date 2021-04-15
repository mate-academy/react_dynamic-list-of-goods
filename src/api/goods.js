
// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => (
  getAll()
    .then(result => result.sort((a, b) => a.name.localeCompare(b.name)))
    .then(result => (result.filter(ele => ele.id < 6)))
);

export const getRedGoods = () => (
  getAll()
    .then(result => (result.filter(ele => ele.color === 'red')))
);

// export async function getAll() {
//   const response = await fetch(API_URL);
//   const data = await response.json();
// }
