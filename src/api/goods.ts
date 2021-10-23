// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const getFromServer = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const getAll = async () => {
  const goods = await getFromServer();

  return goods;
};

export const get5First = () => (
  'Top 5'
);

export const getRedGoods = () => ('red goods');
