const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = async ():Promise<Good[]> => {
  const allGoods = await getAll();

  return allGoods.sort((a, b) => a.name.localeCompare(b.name))
    .splice(0, 5);
};

export const getRedGoods = async ():Promise<Good[]> => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
