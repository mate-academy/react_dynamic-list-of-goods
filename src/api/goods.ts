// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = (goods: Good[]) => {
  const sortGoods = [...goods].sort((a, b) => (a.name.localeCompare(b.name)));

  return sortGoods.slice(0, 5);
};

export const getRedGoods = (goods: Good[]) => (
  goods.filter(good => good.color === 'red')
);
