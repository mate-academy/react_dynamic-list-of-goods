// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const goods: Good[] = await response.json();

  return goods;
};

export const get5First = async (): Promise<Good[]> => {
  const goods: Good[] = await getAll();

  return goods
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods: Good[] = await getAll();

  return goods.filter(good => good.color === 'red');
};
