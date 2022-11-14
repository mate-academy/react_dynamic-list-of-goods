import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = async (url: string) => {
  try {
    const response = await fetch(url);

    return await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log('error', error.message);

    return error;
  }
};

export function getAll(): Promise<Good[]> {
  const answerFromServer = async () => {
    const promise = await request(API_URL);

    return promise;
  };

  return answerFromServer();
}

export const get5First = () => {
  const answerFromServer = async () => {
    const jsonData = await request(API_URL);

    return jsonData.sort((prevGood: Good, currentGood: Good) => (
      prevGood.name.localeCompare(currentGood.name)
    )).slice(0, 5);
  };

  return answerFromServer();
};

export const getRedGoods = () => {
  const answerFromServer = async () => {
    const jsonData = await request(API_URL);

    return jsonData.filter((good: Good) => good.color === 'red');
  };

  return answerFromServer();
};
