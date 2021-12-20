// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getAll(): Promise<Good[]> {
  await wait(500);

  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const allGoods = await getAll();

  return allGoods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRedGoods = async () => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
