// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  return (await fetch(API_URL)).json();
};

export const get5First = async () => {
  return (await getAll())
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  return (await getAll())
    .filter(good => good.color === 'red');
};
