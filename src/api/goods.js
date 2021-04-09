// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAllGoods() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export function get5FirstGoods() {
  return getAllGoods()
    .then(response => response
      .sort((currentGood, nextGood) => (
        currentGood.name.localeCompare(nextGood.name)
      ))
      .slice(0, 5));
}

export function getRedGoods() {
  return getAllGoods()
    .then(response => response.filter(good => (good.color === 'red')));
}
