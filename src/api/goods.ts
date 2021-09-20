// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function loadAllGoods(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('Failed to load data'));
    });
}

export const load5First = () => {
  const first5goods = loadAllGoods()
    .then(goods => (
      goods
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5)
    ));

  return first5goods;
};

export const loadRedGoods = () => {
  const redGoods = loadAllGoods()
    .then(goods => goods.filter((user) => user.color === 'red'));

  return redGoods;
};
