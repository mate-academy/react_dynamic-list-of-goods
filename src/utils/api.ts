import { GOODS_URL } from '../conatants/const';

export const downloadGoodsList = async (): Promise<Good[]> => {
  return fetch(GOODS_URL)
    .then(response => {
      return response.json();
    });
};
