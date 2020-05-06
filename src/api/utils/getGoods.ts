import { API_URL } from '../const/constants';
import { getData } from './getData';

export const getGoods = (): Promise<Good[]> => getData<Good[]>(API_URL);
