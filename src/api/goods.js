// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods);
}

export const get5First = () => fetch(API_URL)
  .then(response => response.json())
  .then((goods) => {
    const newGoods = goods.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    newGoods.length = 5;

    return newGoods;
  });

export const getRedGoods = () => fetch(API_URL)
  .then(response => response.json())
  .then(goods => goods.filter(good => good.color === 'red'));
