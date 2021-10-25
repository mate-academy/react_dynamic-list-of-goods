// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = () => getAll()
  .then(result => result
    .sort((goodName1, goodName2) => goodName1.name.localeCompare(goodName2.name))
    .slice(0, 5));

export const getRedGoods = () => getAll()
  .then(result => result
    .filter(good => good.color === 'red'));
