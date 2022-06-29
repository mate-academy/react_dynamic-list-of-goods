// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = () => (
  fetch(API_URL)
    .then(response => response.json())
);

export const get5First = () => (
  getAll()
    .then(goods => goods
      .sort((good1: Good, good2: Good) => good1.name
        .localeCompare(good2.name))
      .slice(0, 5))
);

export const getRedGoods = () => (
  getAll()
    .then(goods => goods
      .filter((good: Good) => good.color === 'red'))
);
