// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json()).then(data => data);
}

export const get5First = () => getAll()
  .then(result => result.slice(0, 5).sort(
    (a, b) => {
      if (a.name > b.name) {
        return 1;
      }

      if (a.name < b.name) {
        return -1;
      }

      return 0;
    },
  ));

export const getRedGoods = () => getAll()
  .then(result => result.filter(item => item.color === 'red'));
