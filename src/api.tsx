const url = 'https://mate.academy/students-api/goods';

export const fetchGoods = () => {
  return fetch(url)
    .then(response => response.json());
};
