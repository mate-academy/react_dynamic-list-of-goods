// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then((response) => response.json());
}

export const get5First = (): Promise<Good[]> => getAll().then((goods) => {
  return goods
    .sort((fGood: Good, sGood: Good) => fGood.name.localeCompare(sGood.name))
    .slice(0, 5);
});

export const getRedGoods = (): Promise<Good[]> => {
  return getAll().then((goods) => {
    return goods.filter((good: Good) => good.color === 'red');
  });
};
