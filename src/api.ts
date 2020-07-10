const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods';

export const goodsFromServer = () => {
  return fetch(`${API_URL}/goods.json`)
    .then(response => response.json());
};
