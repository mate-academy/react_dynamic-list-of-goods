import { URL_API } from '../constants/index';

export const getGoodsList = () => {
  return fetch(`${URL_API}/goods.json`)
    .then(response => response.json());
};
