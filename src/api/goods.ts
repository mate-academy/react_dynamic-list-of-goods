// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const data = await getAll();
  const firstFive = data.sort(
    (a: Good, b: Good) => a.name.localeCompare(b.name),
  );

  return firstFive.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const data = await getAll();

  return data.filter((product: Good) => product.color === 'red');
};
