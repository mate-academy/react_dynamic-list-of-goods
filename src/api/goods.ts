// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
};

export const get5First = async () => {
  const response = await fetch(API_URL);

  return response.json()
    .then(goods => (
      goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .splice(0, 5)
    ));
};

export const getRedGoods = async () => {
  const response = await fetch(API_URL);

  return response.json()
    .then(goods => (
      goods.filter((good : Good) => good.color === 'red')
    ));
};
