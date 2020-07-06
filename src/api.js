const URL = 'https://mate.academy/students-api/goods';

export const getGoods = () => {
  return fetch(URL)
    .then(response => response.json());
};
