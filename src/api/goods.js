// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll().then(
  response => response.splice(0, 5)
    .sort((
      firstGood, secondGood,
    ) => firstGood.name.localeCompare(secondGood.name)),
);

export const getRedGoods = () => getAll()
  .then(response => response.filter(good => good.color === 'red'));
