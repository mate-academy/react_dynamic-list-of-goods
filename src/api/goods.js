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
  const preparedGoods = getAll()
    .then(list => list
      .sort((a, b) => (a.name).localeCompare(b.name))
      .slice(0, 5));

  return preparedGoods;
};

export const getRedGoods = () => {
  const preparedGoods = getAll()
    .then(list => list
      .filter(item => item.color === 'red'));

  return preparedGoods;
};
