import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to load goods: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to load goods: ${error}`);
  }
}

export const get5First = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to load goods: ${response.status} ${response.statusText}`,
      );
    }

    return await response.json().then(goods =>
      goods
        .sort((good1: Good, good2: Good) => {
          return good1.name.localeCompare(good2.name);
        })
        .slice(0, 5),
    );
  } catch (error) {
    throw new Error(`Failed to load goods: ${error}`);
  }
};

export const getRedGoods = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to load goods: ${response.status} ${response.statusText}`,
      );
    }

    return await response
      .json()
      .then((goods: Good[]) => goods.filter(good => good.color === 'red'));
  } catch (error) {
    throw new Error(`Failed to load goods: ${error}`);
  }
};
