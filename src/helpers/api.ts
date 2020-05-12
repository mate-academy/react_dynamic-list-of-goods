const API_URL = 'http://localhost:3000';

export const getGoods = async (): Promise<Good[]> => {
  const response = await fetch(`${API_URL}/goods.json`);
  return response.json();
};
