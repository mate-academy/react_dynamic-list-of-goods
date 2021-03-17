// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5FirstGoods = () => (
  getAllGoods()
    .then(result => (
      result
        .slice(0, 5)
        .sort((curr, next) => (
          curr.name.localeCompare(next.name)
        ))
    ))
);

export const getRedGoods = () => (
  getAllGoods()
    .then(result => result.filter(item => item.color === 'red'))
);
