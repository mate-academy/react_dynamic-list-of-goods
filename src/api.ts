const URL = 'https://mate.academy/students-api/goods';

export const getGoods = (): Promise<ResponseData> => {
  return fetch(`${URL}`)
    .then(response => response.json());
};
