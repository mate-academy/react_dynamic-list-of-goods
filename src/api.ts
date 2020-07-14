import { GoodListItem } from './Interfaces';

const API_URL = 'https://mate.academy/students-api/goods';

export const loadGoods = (): Promise<{data: GoodListItem[]}> => (
  fetch(API_URL).then(response => response.json()));
