import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

const request = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}-${response.statusText}`);
  }

  const data = await response.json();

  return data;
};

export function getAll(): Promise<Good[]> {
  const answerFromServer = async () => {
    const jsonData = await request(API_URL);

    return jsonData;
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
