import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://michelam-pseudo.github.io/react_dynamic-list-of-goods/api/goods.json`;

export const getAll = (): Promise<Good[]> => {
  try {
    return fetch(API_URL).then(response => response.json());
  } catch (error) {
    throw new Error(
      'Houve um erro na requisição à API. O que se sabe sobre: \n' + error,
    );
  }
};

export const get5First = (): Promise<Good[]> => {
  try {
    return getAll().then((goods: Good[]) => {
      goods.sort((good1: Good, good2: Good) => {
        return good1.name.localeCompare(good2.name);
      });

      return goods.slice(0, 5);
    });
  } catch (error) {
    throw new Error(
      'Houve um erro na requisição à API. O que se sabe sobre: \n' + error,
    );
  }
};

export const getRedGoods = (): Promise<Good[]> => {
  try {
    return getAll().then(goods => goods.filter(good => good.color === 'red'));
  } catch (error) {
    throw new Error(
      'Houve um erro na requisição à API. O que se sabe sobre: \n' + error,
    );
  }
};
