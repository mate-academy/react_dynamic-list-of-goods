// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const goods = getAll();
  const sortedGoods = (await goods)
    .sort((current, next) => current.name.localeCompare(next.name));

  return sortedGoods.slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = getAll();

  return (await goods).filter(good => good.color === 'red');
};
