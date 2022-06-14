// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const result = (await getAll())
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5);

  return result;
};

export const getRedGoods = async () => {
  const result = (await getAll())
    .filter(good => good.color === 'red');

  return result;
};
