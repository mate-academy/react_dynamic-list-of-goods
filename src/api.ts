import { Good } from './interfaces';

const API_URL = 'https://mate.academy/students-api/goods';

export const getData = async (): Promise<{data: Good[]}> => {
  const response = await fetch(API_URL);

  return response.json();
};
