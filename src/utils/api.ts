export const getGoods = (url: string): Promise<Good[]> => {
  return fetch(url)
    .then(response => response.json());
};
