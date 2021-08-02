// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export function get5First() {
  return getAll()
    .then((goods) => {
      const sortedGoods = goods.sort((prev, current) => {
        const prevGoodName = prev.name;
        const currentGoodName = current.name;

        return prevGoodName.localeCompare(currentGoodName);
      });

      return sortedGoods.slice(0, 5);
    });
}

export function getRed() {
  return getAll()
    .then(goods => goods.filter(good => good.color === 'red'));
}
