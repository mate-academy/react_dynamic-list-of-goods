// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const respon = await response.json();

  return respon.slice(0, 5);
};

export const getRedGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);
  const respon = await response.json();

  return respon.filter((good: Good) => {
    return good.color === 'red';
  });
};
