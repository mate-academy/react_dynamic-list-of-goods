// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number): Promise<typeof delay> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export async function getAll(): Promise<Good[]> {
  await wait(500);

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.sort((goodA: Good, goodB: Good) => (
      goodA.name.localeCompare(goodB.name)
    )))
    .then(sorted => [...sorted].slice(0, 5));
};

export const getRedGoods = (): Promise<Good[]> => {
  return getAll()
    .then(goods => goods.filter((good: Good) => good.color === 'red'));
};
