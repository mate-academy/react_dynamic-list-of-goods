import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = async (url: string): Promise<Good[]> => {
  try {
    const dataFromServer = await fetch(url);

    return await dataFromServer.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log('error', error.message);
    throw error;
  }
};

export const getAll = async (): Promise<Good[]> => {
  try {
    return await request(API_URL);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log('error', error.message);
    throw error;
  }
};

export const get5First = async () => {
  try {
    const goodsFromServer = await request(API_URL);

    return goodsFromServer.sort((prevGood: Good, currentGood: Good) => (
      prevGood.name.localeCompare(currentGood.name)
    )).slice(0, 5);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log('error', error.message);
    throw error;
  }
};

export const getRedGoods = async () => {
  try {
    const goodsFromServer = await request(API_URL);

    return goodsFromServer.filter((good: Good) => good.color === 'red');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log('error', error.message);
    throw error;
  }
};
