// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const getFiveFirst = async () => {
  const goods = await getAll();

  return [...goods]
    .sort((first, second) => first.name.localeCompare(second.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  return getAll().then(goods => (goods.filter(good => good.color === 'red')));
};
