// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function requestGoods() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export function renderGoods() {
  return requestGoods()
    .then(goods => goods.sort(
      (currGood, nextGood) => currGood.name.localeCompare(nextGood.name),
    ).slice(0, 5));
}

export function get5First() {
  return requestGoods()
    .then(goods => goods.sort(
      (currGood, nextGood) => currGood.name.localeCompare(nextGood.name),
    ).slice(0, 5));
}

export function getRedGoods() {
  return requestGoods()
    .then(goods => goods.filter(good => good.color === 'red'));
}
