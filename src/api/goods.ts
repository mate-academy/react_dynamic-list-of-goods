// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const wait = (delay: number): Promise<typeof delay> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const getAll = async (): Promise<Good[]> => {
  await wait(1000);

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Ooops. Error: ${response.status}`);
  }

  return response.json();
};

export const get5First = async () => {
  const goods = await getAll();

  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(item => item.color === 'red');
};
