// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// const promise = fetch(API_URL);

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const request = () => (
  fetch(`${API_URL}`)
    .then(response => (
      response.json()
    ))
    .then(serverResponse => serverResponse.data || serverResponse)
);

export const get5First = () => (
  fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods.sort((first, second) => (
      first.name.localeCompare(second.name)
    )))
    .then(goods => goods.slice(0, 5))
);

export const getAllGoods = () => (
  fetch(API_URL)
    .then(response => response.json())
);

export const getRedGoods = () => (
  fetch(API_URL)
    .then(response => response.json())
    .then(response => (
      response.filter(good => good.color === 'red')
    ))
);
