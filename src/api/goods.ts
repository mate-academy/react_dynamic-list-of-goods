// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = async (): Promise<Good[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`${res.status} - ${res.statusText}`);
  }

  return res.json();
};

export const get5First = async () => {
  return (await getAll())
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .splice(0, 5);
};

export const getRed = async () => {
  return (await getAll())
    .filter(good => good.color === 'red');
};
