// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(result => (
    result.slice(0, 5).sort((a, b) => (
      a.name.localeCompare(b.name)
    ))
  ));

export const getRedGoods = () => getAll()
  .then(items => (
    items.filter(item => item.color === 'red')
  ));
