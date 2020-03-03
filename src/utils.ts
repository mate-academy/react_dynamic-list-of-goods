const url = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const downloadData = async (): Promise<Good[]> => {
  return fetch(url)
    .then(response => {
      return response.json();
    });
};
