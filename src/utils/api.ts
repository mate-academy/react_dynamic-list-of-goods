import { GOODS_URL } from '../constants';

export const downloadGoodsList = async (): Promise<Good[]> => {
  return fetch(GOODS_URL)
    .then(response => response.json());
};
