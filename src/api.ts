const URL = 'https://mate.academy/students-api/goods';

export const getGoods = (): Promise<Data> => {
  return fetch(`${URL}`)
    .then(response => response.json());
};
