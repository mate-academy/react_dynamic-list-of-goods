const url = 'https://mate.academy/students-api/goods';

export const getGoods = () => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.statusText);
    });
};
