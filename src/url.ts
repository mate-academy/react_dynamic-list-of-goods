import { Good } from './interfaces';

const API_URL = 'https://mate.academy/students-api/goods';

export const responseFromServer = (): Promise<Good[]> => fetch(API_URL)
  .then(
    response => response.json(),
  ).then(
    data => data.data,
  );
