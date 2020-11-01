// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => getAll()
  .then(result => (
    result.slice(0, 5).sort((goodA, GoodB) => (
      goodA.name.localeCompare(GoodB.name)
    ))
  ));

export const getRedGoods = () => getAll()
  .then(goods => (
    goods.filter(good => good.color === 'red')
  ));
