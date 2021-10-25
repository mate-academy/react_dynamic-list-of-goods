// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll()
    .then(result => (
      result.sort(({ name: firstName }, { name: secondName }) => (
        firstName.localeCompare(secondName)
      )).slice(0, 5)
    ));
};

export const getRedGoods = () => {
  return getAll()
    .then(result => (
      result.filter(good => good.color === 'red')
    ));
};
