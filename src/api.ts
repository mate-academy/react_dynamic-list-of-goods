const API_URL = 'https://mate.academy/students-api/goods';

export const loadGoodsList = async <T>(): Promise<{data: T[]}> => {
  const response = await fetch(API_URL);

  return response.json();
};
