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
  const res = await fetch(API_URL);

  return res.json()
    .then(goods => (
      goods
        .sort((good1: Good, good2: Good) => good1.name.localeCompare(good2.name))
        .splice(0, 5)
    ));
};

export const getRed = async () => {
  const res = await fetch(API_URL);

  return res.json()
    .then(goods => (
      goods.filter((good: Good) => good.color === 'red')
    ));
};
