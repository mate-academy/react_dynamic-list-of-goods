// eslint-disable-next-line
const API_URL = `https://mate.academy/students-api/goods`;

export const getAll = async (): Promise<Good[]> => {
  const promise = await fetch(API_URL);

  return promise.json();
};

export const get5First = async () => {
  return (await getAll())
    .sort((name1, name2) => name1.name.localeCompare(name2.name))
    .slice(0, 6);
};

export const getRedGoods = async () => {
  return (await getAll())
    .filter(good => good.color === 'red');
};
