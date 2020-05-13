import { IGood } from "../models/IGood";

const API_URL = 'https://mate-academy.github.io/';

export const getGoods =(): Promise<IGood[]> => {
  return fetch(`${API_URL}/react_dynamic-list-of-goods/goods.json`)
          .then(response => {debugger
            return response.json()
          });
};


