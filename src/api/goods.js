// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return getAll()
    .then(result => (
      result.slice(0, 5).sort((currentValue, nextValue) => (
        currentValue.name.localeCompare(nextValue.name)
      ))
    ));
}

export function getRedGoods() {
  return getAll()
    .then(result => (
      result.filter(item => item.color === 'red')
    ));
}
