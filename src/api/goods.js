// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = () => (
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
);

export const get5First = () => getAll()
  .then(goods => goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .splice(0, 5));

export const getRedGoods = () => getAll()
  .then(goods => goods.filter(good => good.color === 'red'));
