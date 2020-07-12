const API_URL = 'https://mate.academy/students-api/goods';

export const goodsFromServer = async <T>(): Promise<{data: T[]}> => (
  fetch(API_URL).then(response => response.json())
);
