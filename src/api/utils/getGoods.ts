import { API_URL } from '../const/constants';
import { getData } from './getData';

export const getGoods = () => getData<Good[]>(API_URL);
