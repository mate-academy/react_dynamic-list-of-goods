import { API_URL } from '../constants';

export const response = async () => {
  const data = await fetch(API_URL);

  return data.json();
};
