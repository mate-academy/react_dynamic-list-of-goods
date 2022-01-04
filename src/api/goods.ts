// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  const goods = await fetch(API_URL);

  return goods.json();
};

export const get5First = async () => {
  return (await getAll())
    .slice(0, 5)
    .sort((prev, next) => prev.name.localeCompare(next.name));
};

export const getRedGoods = async () => {
  return (await getAll()).filter(good => good.color === 'red');
};
