// eslint-disable-next-line
export const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const res = await fetch(API_URL);

  return res.json();
};

export const get5First = async (): Promise<Good[]> => {
  const res = await getAll();

  return res.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const res = await getAll();

  return res.filter((good: Good) => good.color === 'red');
};
