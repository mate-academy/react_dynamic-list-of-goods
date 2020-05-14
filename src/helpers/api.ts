import { IGoodsItem } from "./interfaces";

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods';

export const getGoods = async (): Promise<IGoodsItem[]> => {
  const response = await fetch(`${API_URL}/goods.json`);

  return response.json();
}
