// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async () => {
  const data = await getAll();
  const sorted = await data.sort((good1, good2) => (
    good1.name.localeCompare(good2.name)
  ));

  return sorted.splice(0, 5);
};

export const getRedGoods = async () => {
  const data = await getAll();
  const filtered = await data.filter(good => good.color === 'red');

  return filtered;
};
