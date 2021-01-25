// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const getFetchGoods = () => fetch(API_URL).then(response => response.json());

export const getAll = () => getFetchGoods();

export const get5First = () => {
  return getFetchGoods()
    .then(goods => goods.sort((good1, good2) => {
      return good1.name.localeCompare(good2.name);
    }).slice(0, 5));
};

export const getRedGoods = () => {
  return getFetchGoods()
    .then(goods => goods.filter(good => good.color === 'red'));
};
