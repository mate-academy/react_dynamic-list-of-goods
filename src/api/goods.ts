// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then((first5) => {
      const good = first5.slice(0, 5);

      return good.sort((goodA: Good, goodB: Good) => (
        goodA.name.localeCompare(goodB.name)));
    });
};

export const getRedGoods = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods.filter((good: Good) => good.color === 'red'));
};
