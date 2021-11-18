// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL)
      .then(data => data.json());

    return response;
  } catch (error) {
    throw new Error(`There is a problem: ${error}`);
  }
}

export const get5First = async () => {
  const data = await getAll();

  return data.filter(good => good.id <= 5)
    .sort((firstGood, secondGood) => firstGood.name.localeCompare(secondGood.name));
};

export const getRedGoods = async () => {
  const data = await getAll();

  return data.filter(good => good.color === 'red');
};
