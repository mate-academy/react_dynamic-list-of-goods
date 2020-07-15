const URL = 'https://mate.academy/students-api/goods';

export const loadData = async <T>(): Promise<T> => {
  const response = await fetch(URL);

  return response.json();
};
