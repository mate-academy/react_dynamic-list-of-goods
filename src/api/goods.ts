const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const request = async (endpoint = '') => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);

    return await response.json();
  } catch (error) {
    return Error('Request has failed.');
  }
};

export const getAll = (): Promise<Good[]> => request();

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(({ color }) => color === 'red');
};
