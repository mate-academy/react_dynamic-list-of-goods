// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (goods: Good[]) => {
  const filterResult = goods.filter((_good, index) => index < 5);

  const result = [...filterResult].sort((a: Good, b: Good) => b.id - a.id);

  return result;
};

export const getRedGoods = (goods: Good[]) => {
  return goods.filter(good => good.color === 'red');
};
