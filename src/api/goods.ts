// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return (
    getAll()
      .then((allGoods: Good[]) => allGoods
        .sort((a, b) => (a.name).localeCompare(b.name))
        .filter((_, i) => i < 5))
  );
};

export const getRedGoods = () => {
  return (
    getAll()
      .then((allGoods: Good[]) => allGoods
        .filter(good => good.color === 'red'))
  );
};
