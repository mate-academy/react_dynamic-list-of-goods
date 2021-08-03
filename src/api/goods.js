// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  const fiveGoods = getAll()
    .then(goods => goods.sort(
      (goodA, goodB) => goodA.name.localeCompare(goodB.name),
    ))
    .then(goods => goods.slice(0, 5));

  return fiveGoods;
};

export const getRedGoods = () => {
  const goodsWithRedColor = getAll()
    .then(goods => goods.filter(good => good.color === 'red'));

  return goodsWithRedColor;
};
