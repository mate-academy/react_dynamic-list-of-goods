// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const request = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`The problem is here ${error}`);
  }
};

export async function getAll(): Promise<Good[]> {
  const goods = await request(API_URL);

  return goods;
}

export const get5First = async (): Promise<Good[]> => {
  const data = await request(API_URL);
  const goods = data
    .sort((good1: Good, good2: Good) => good1.name.localeCompare(good2.name))
    .filter((_: Good, index: number) => index < 5);

  return goods;
};

export const getRed = async (): Promise<Good[]> => {
  const data = await request(API_URL);
  const goods = data.filter((good: Good) => good.color === 'red');

  return goods;
};
