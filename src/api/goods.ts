// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const goods = await fetch(API_URL)
      .then(data => data.json());

    return goods;
  } catch (error) {
    throw new Error(`There is a problem: ${error}`);
  }
}

export const get5First = async () => {
  const response = await getAll();

  return response.slice(0, 5)
    .sort((firstGood, secondGood) => firstGood.name.localeCompare(secondGood.name));
};

export const getRedGoods = async () => {
  const response = await getAll();

  return response.filter(good => good.color === 'red');
};
