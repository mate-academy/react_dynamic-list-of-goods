// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const result = await fetch(API_URL);

  return result.json();
};

export const get5First = async (): Promise<Good[]> => {
  const result = await getAll();

  return result.sort((a, b) => a.name.localeCompare(b.name))
    .splice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const result = await getAll()
    .then(response => response.filter(good => good.color === 'red'));

  return result.filter(good => good.color === 'red');
};

export const getGreenGoods = async (): Promise<Good[]> => {
  const result = await getAll();

  return result.filter(good => good.color === 'green');
};
