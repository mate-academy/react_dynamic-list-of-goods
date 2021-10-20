// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = (url = '') => {
  return fetch(`${API_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const getAll = (): Promise<Good[]> => request();

export const get5First = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
