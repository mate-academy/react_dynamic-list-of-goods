import { API_URL } from '../const/constants';
/* import { getData } from './getData'; */

export const getGoods = (): Promise<Good[]> => (fetch(API_URL).then(response => response.json()));
/* export const getGoods = getData<Good[]>(API_URL); */
