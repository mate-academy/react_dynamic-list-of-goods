const API_URL
= `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(list => list.slice(0, 5)
      .sort(
        (current, next) => current.name.localeCompare(next.name),
      ));
}

export function getRedGoods() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(list => list.filter(product => product.color === 'red'));
}
