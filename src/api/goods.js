// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5FirstGoods = () => getAllGoods()
// eslint-disable-next-line
  .then(data => data.sort((previous, current) => previous.name.localeCompare(current.name)))
  .then(sortedList => sortedList.slice(0, 5));

export const getRedGoods = () => getAllGoods()
  .then(data => data.filter(item => item.color === 'red'));
