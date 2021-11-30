// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(result => [...result].sort((good1, good2) => {
      return good1.name.localeCompare(good2.name);
    }).filter((_item, ind) => ind < 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(result => result.filter(item => item.color === 'red'));
};
