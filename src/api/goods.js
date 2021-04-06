// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function request(url, options) {
  return fetch(url, options)
    .then((result) => {
      if (!result.ok) {
        throw new Error(`${result.status} - ${result.statusText}`);
      }

      return result.json();
    });
}

export function getAll() {
  return request(API_URL);
}

export function get5First() {
  return getAll()
    .then(result => result.slice(0, 5));
}

export function getRedGoods() {
  return getAll()
    .then(result => result.filter(good => good.color === 'red'));
}
