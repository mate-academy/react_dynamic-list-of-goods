import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export const getAll = (): Promise<Good[]> => {
  try {
    return fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Requisição falhou');
      })
      .catch(error => {
        return error;
      });
  } catch (error) {
    throw new Error(
      'Houve um erro na requisição à API. O que se sabe sobre: \n' + error,
    );
  }
};

export const get5First = (): Promise<Good[]> => {
  try {
    return getAll()
      .then((goods: Good[]) => {
        return goods.slice(0, 5).sort((good1: Good, good2: Good) => {
          return good1.name.localeCompare(good2.name);
        });
      })
      .catch(error => {
        return error;
      });
  } catch (error) {
    throw new Error(
      'Houve um erro na requisição à API. O que se sabe sobre: \n' + error,
    );
  }
};

export const getRedGoods = (): Promise<Good[]> => {
  try {
    return getAll()
      .then(goods => goods.filter(good => good.color === 'red'))
      .catch(error => error);
  } catch (error) {
    throw new Error(
      'Houve um erro na requisição à API. O que se sabe sobre: \n' + error,
    );
  }
};
