import { IGood } from "../models/IGood";

const API_URL = 'https://mate-academy.github.io/';

export const getGoods = (): Promise<IGood[]> => {

  return fetch(`${API_URL}/react_dynamic-list-of-goods/goods.json`)
            .then( async response => {

              //L-o-o-o-o-o-o-o-o-o-n-g response time emulation:
              await delay(1 * 1000);
              return response.json()
            });
};

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
