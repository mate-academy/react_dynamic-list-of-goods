// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = async (endpoint = '') => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);

    return await response.json();
  } catch (error) {
    return Error('Request failed');
  }
};

export const getAll = (): Promise<Good[]> => request();

export const get5First = async () => {
  const goods = await getAll();

  return (
    goods.sort((good1, good2) => good1.name.localeCompare(good2.name)).slice(0, 5)
  );
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(({ color }) => color === 'red');
};
