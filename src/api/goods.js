// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = () => {
  const first5 = getAll()
    .then(goods => goods
      .sort((a, b) => (a.name).localeCompare(b.name))
      .slice(0, 5));

  return first5;
};

export const getRedGoods = () => {
  const redGoods = getAll()
    .then(goods => goods
      .filter(good => good.color === 'red'));

  return redGoods;
};
