// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const goods = await response.json();

    return goods;
  } catch (error) {
    throw new Error(`The problem is here ${error}`);
  }
}

export const get5First = async (): Promise<Good[]> => {
  const data = await getAll();
   return [...data].sort((product1, product2) => {
    return product1.name.localeCompare(product2.name);
  }).slice(0, 5);

  
};

export const getRedGoods = async (): Promise<Good[]> => {
  const data = await getAll();
  return data.filter((good: Good) => good.color === 'red');

  
};
