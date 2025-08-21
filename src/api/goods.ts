import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  try {
    return await fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then(data => data);
  } catch (e) {
    throw e instanceof Error ? e : new Error(String(e));
  }
}
//new Error()
// sort and get the first 5

export const get5First = async (): Promise<Good[]> => {
  try {
    return await getAll().then(goods => {
      return goods
        .toSorted((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        )
        .slice(0, 5);
    });
  } catch (e) {
    throw e instanceof Error ? e : new Error(String(e));
  }
};

// get only red
export const getRedGoods = async (): Promise<Good[]> => {
  try {
    return await getAll()
      .then(goods => goods)
      .then(data => data.filter(x => x.color === 'red'));
  } catch (e) {
    throw e instanceof Error ? e : new Error(String(e));
  }
};
