// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise(resolvePromise => setTimeout(resolvePromise, delay));
}

export async function getAll(): Promise<Good[]> {
  await wait(500);

  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const goods = await getAll();

  return goods
    .sort((goodA, goodB) => goodA.name.localeCompare(goodB.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await getAll();

  return goods.filter(good => good.color === 'red');
};
