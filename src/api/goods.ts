// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const getFirst5Goods = (): Promise<Good[]> => {
  return getAll()
    .then((goods: Good[]) => (
      goods
        .sort((curr: Good, next: Good) => curr.name.localeCompare(next.name))
        .slice(0, 5)
    ));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then((goods: Good[]) => (
      goods
        .filter((good: Good) => good.color === 'red')
    ));
};
