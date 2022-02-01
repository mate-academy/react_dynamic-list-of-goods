// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const res = await getAll();

  res.length = 5;

  return res;
};

export const getRedGoods = async () => {
  const res = await getAll();

  return res.filter((good) => {
    if (good.color === 'red') {
      return true;
    }

    return false;
  });
};
