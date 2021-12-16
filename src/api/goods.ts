// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const getAll = async (): Promise<Good[]> => {
  await wait(1000);

  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
