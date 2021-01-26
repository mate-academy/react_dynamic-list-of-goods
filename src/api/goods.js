// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return response.json();
    });
}

export const get5FirstGoods = () => (
  getAllGoods()
    .then(goods => goods.slice(0, 5))
);

export const getRedGoods = () => (
  getAllGoods()
    .then(goods => goods.filter(good => good.color === 'red'))
);
