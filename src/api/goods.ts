// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(response => response.splice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(response => response.filter(good => good.color === 'red'));
};

export const getGreenGoods = async (): Promise<Good[]> => {
  const result = await getAll();

  return result.filter(good => good.color === 'green');
};
